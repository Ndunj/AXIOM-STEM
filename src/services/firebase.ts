import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  initializeFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";
import firebaseConfig from "../../firebase-applet-config.json";
import { UserProfile, TeacherPurchasedSimulation, LessonPlanData } from "../types";

// 1. Initialize Firebase App and Services
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Use long-polling transport for WebChannel to prevent 10s streaming timeout errors in proxied iframe environments
try {
  initializeFirestore(app, {
    experimentalForceLongPolling: true,
  }, firebaseConfig.firestoreDatabaseId);
} catch {
  // Instance already initialized
}

/* CRITICAL: The app requires firebaseConfig.firestoreDatabaseId */
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

// 2. Validate Connection to Firestore (Non-blocking, only if authenticated)
export async function testFirestoreConnection(): Promise<boolean> {
  if (!auth.currentUser) return true;
  try {
    const userDocRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(userDocRef);
    return Boolean(docSnap);
  } catch {
    return true;
  }
}

// 3. Error Handling Specification
export enum OperationType {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
  LIST = "list",
  GET = "get",
  WRITE = "write",
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error("Firestore Error: ", JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Helper to ensure user is authenticated in Firebase Auth matching the user ID
export function isAuthReadyForUser(userId: string): boolean {
  return Boolean(auth.currentUser && auth.currentUser.uid === userId);
}

// 4. User Profile Persistence
export async function syncUserProfileToFirestore(profile: UserProfile): Promise<void> {
  if (!profile || !profile.uid || !isAuthReadyForUser(profile.uid)) return;
  const path = `users/${profile.uid}`;
  try {
    const userDocRef = doc(db, "users", profile.uid);
    const dataToSave = {
      uid: profile.uid,
      email: profile.email || "user@axiomstem.edu",
      displayName: profile.displayName || "STEM Educator",
      photoURL: profile.photoURL || "",
      role: profile.role || "teacher",
      schoolName: profile.schoolName || "",
      district: profile.district || "",
      department: profile.department || "",
      savedFavorites: profile.savedFavorites || [],
      updatedAt: new Date().toISOString(),
      createdAt: profile.createdAt || new Date().toISOString()
    };
    await setDoc(userDocRef, dataToSave, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function getUserProfileFromFirestore(userId: string): Promise<Partial<UserProfile> | null> {
  if (!userId || !isAuthReadyForUser(userId)) return null;
  const path = `users/${userId}`;
  try {
    const docSnap = await getDoc(doc(db, "users", userId));
    if (docSnap.exists()) {
      return docSnap.data() as Partial<UserProfile>;
    }
    return null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

// 5. User Saved / Favorited Simulations
export async function saveFavoriteToFirestore(userId: string, simId: string, title: string, discipline: string): Promise<void> {
  if (!userId || !simId || !isAuthReadyForUser(userId)) return;
  const path = `users/${userId}/savedSimulations/${simId}`;
  try {
    await setDoc(doc(db, "users", userId, "savedSimulations", simId), {
      simId,
      title,
      discipline,
      savedAt: new Date().toISOString()
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function removeFavoriteFromFirestore(userId: string, simId: string): Promise<void> {
  if (!userId || !simId || !isAuthReadyForUser(userId)) return;
  const path = `users/${userId}/savedSimulations/${simId}`;
  try {
    await deleteDoc(doc(db, "users", userId, "savedSimulations", simId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export function subscribeToUserFavorites(userId: string, callback: (favorites: string[]) => void): () => void {
  if (!userId || !isAuthReadyForUser(userId)) return () => {};
  const path = `users/${userId}/savedSimulations`;
  try {
    const colRef = collection(db, "users", userId, "savedSimulations");
    return onSnapshot(colRef, (snapshot) => {
      const favIds = snapshot.docs.map((doc) => doc.id);
      callback(favIds);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, path);
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

// 6. User Purchased Licenses Persistence
export async function saveUserLicenseToFirestore(userId: string, license: TeacherPurchasedSimulation): Promise<void> {
  if (!userId || !license || !license.simulationId || !isAuthReadyForUser(userId)) return;
  const licenseDocId = `${license.simulationId}_${license.licenseTier}`;
  const path = `users/${userId}/licenses/${licenseDocId}`;
  try {
    await setDoc(doc(db, "users", userId, "licenses", licenseDocId), {
      id: licenseDocId,
      userId,
      simulationId: license.simulationId,
      licenseTier: license.licenseTier,
      licenseKey: license.licenseKey,
      classroomPin: license.classroomPin,
      purchaseDate: license.purchaseDate,
      activeStudents: license.activeStudents || 0,
      assignedClasses: license.assignedClasses || [],
      createdAt: new Date().toISOString()
    }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export function subscribeToUserLicenses(
  userId: string,
  callback: (licenses: TeacherPurchasedSimulation[]) => void
): () => void {
  if (!userId || !isAuthReadyForUser(userId)) return () => {};
  const path = `users/${userId}/licenses`;
  try {
    const colRef = collection(db, "users", userId, "licenses");
    return onSnapshot(colRef, (snapshot) => {
      const list: TeacherPurchasedSimulation[] = snapshot.docs.map((d) => {
        const data = d.data();
        return {
          simulationId: data.simulationId,
          purchaseDate: data.purchaseDate || new Date().toISOString(),
          licenseTier: data.licenseTier || "single",
          licenseKey: data.licenseKey || "AK-XXXX",
          classroomPin: data.classroomPin || "000000",
          activeStudents: data.activeStudents || 0,
          assignedClasses: data.assignedClasses || []
        };
      });
      callback(list);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, path);
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

// 7. Simulation Progress Tracking Persistence
export async function saveSimulationProgressToFirestore(
  userId: string,
  simulationId: string,
  progress: {
    completedChallenges?: string[];
    highestScore?: number;
    timesPlayed?: number;
    totalMinutes?: number;
  }
): Promise<void> {
  if (!userId || !simulationId || !isAuthReadyForUser(userId)) return;
  const path = `users/${userId}/simulationProgress/${simulationId}`;
  try {
    await setDoc(doc(db, "users", userId, "simulationProgress", simulationId), {
      userId,
      simulationId,
      ...progress,
      lastPlayedAt: new Date().toISOString()
    }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

// 8. Custom Teacher Lesson Plans Persistence
export async function saveLessonPlanToFirestore(
  userId: string,
  plan: LessonPlanData & { simulationId: string; planId?: string }
): Promise<string> {
  if (!userId || !isAuthReadyForUser(userId)) return "";
  const planId = plan.planId || `plan_${Date.now()}`;
  const path = `users/${userId}/lessonPlans/${planId}`;
  try {
    await setDoc(doc(db, "users", userId, "lessonPlans", planId), {
      id: planId,
      userId,
      simulationId: plan.simulationId,
      title: plan.title,
      discipline: plan.discipline,
      gradeLevel: plan.gradeLevel,
      estimatedTime: plan.estimatedTime,
      ngssStandard: plan.ngssStandard,
      learningObjectives: plan.learningObjectives || [],
      essentialQuestions: plan.essentialQuestions || [],
      pacingGuide: plan.pacingGuide || [],
      differentiatedInstruction: plan.differentiatedInstruction || { support: "", extension: "" },
      studentLabQuestions: plan.studentLabQuestions || [],
      createdAt: new Date().toISOString()
    }, { merge: true });
    return planId;
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function getUserLessonPlansFromFirestore(userId: string): Promise<any[]> {
  if (!userId || !isAuthReadyForUser(userId)) return [];
  const path = `users/${userId}/lessonPlans`;
  try {
    const colSnap = await getDocs(collection(db, "users", userId, "lessonPlans"));
    return colSnap.docs.map((d) => d.data());
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
  }
}

// 9. Public Reviews for Simulations
export async function addSimulationReviewToFirestore(
  simId: string,
  review: {
    authorUid: string;
    authorName: string;
    authorEmail: string;
    rating: number;
    comment: string;
    schoolName?: string;
  }
): Promise<string> {
  const reviewId = `rev_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const path = `simulations/${simId}/reviews/${reviewId}`;
  try {
    await setDoc(doc(db, "simulations", simId, "reviews", reviewId), {
      id: reviewId,
      simulationId: simId,
      authorUid: review.authorUid,
      authorName: review.authorName,
      authorEmail: review.authorEmail,
      rating: review.rating,
      comment: review.comment,
      schoolName: review.schoolName || "STEM Educator",
      createdAt: new Date().toISOString()
    });
    return reviewId;
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function getSimulationReviewsFromFirestore(simId: string): Promise<any[]> {
  const path = `simulations/${simId}/reviews`;
  try {
    const q = query(collection(db, "simulations", simId, "reviews"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map((d) => d.data());
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
  }
}
