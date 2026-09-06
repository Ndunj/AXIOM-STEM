import { CreatorUploadLicense, UserProfile } from "../types";
import { saveCreatorPassToFirestore, auth } from "./firebase";

export const AXIOM_OWNER_EMAIL = "kayinebi123@gmail.com";
export const AXIOM_CO_OWNER_EMAIL = "ndunj123@gmail.com";

// Fee determined at author discretion for publishing slot on curated STEM marketplace
export const CREATOR_UPLOAD_FEE = 49; // $49.00 USD Standard Single Simulation Upload Slot
export const CREATOR_STUDIO_PASS_FEE = 129; // $129.00 USD Unlimited Creator Studio Pass

const LOCAL_CREATOR_LICENSE_PREFIX = "axiom_creator_license_";

/**
 * Checks if the given email belongs to the AXIOMSTEM platform owner.
 * Platform owners have fee-exempt, master authoring and publishing rights.
 */
export function isAxiomstemOwner(email?: string | null): boolean {
  if (!email) return false;
  const normalized = email.trim().toLowerCase();
  return (
    normalized === AXIOM_OWNER_EMAIL.toLowerCase() ||
    normalized === AXIOM_CO_OWNER_EMAIL.toLowerCase() ||
    normalized.includes("kayinebi") ||
    normalized.includes("ndunj123@gmail.com")
  );
}

/**
 * Retrieves the stored creator publishing license for an email or user ID.
 */
export function getSavedCreatorLicense(email?: string | null): CreatorUploadLicense | null {
  if (!email) return null;
  
  // If owner, auto-grant master license
  if (isAxiomstemOwner(email)) {
    return {
      id: "owner-master-pass",
      creatorUid: "axiom-owner",
      creatorEmail: email,
      creatorName: "AXIOMSTEM Platform Owner",
      ownerEmail: AXIOM_OWNER_EMAIL,
      amountPaid: 0,
      currency: "USD",
      tier: "creator_pass",
      status: "active",
      paymentMethod: "grant",
      transactionId: "AXM-OWNER-MASTER-ACCESS",
      purchasedAt: new Date().toISOString(),
      uploadSlotsRemaining: 999999,
    };
  }

  try {
    const key = `${LOCAL_CREATOR_LICENSE_PREFIX}${email.trim().toLowerCase()}`;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.status === "active") {
      return parsed as CreatorUploadLicense;
    }
  } catch (e) {
    console.warn("Failed to read creator license:", e);
  }
  return null;
}

export interface CreatorUploadCheckResult {
  allowed: boolean;
  isOwner: boolean;
  license: CreatorUploadLicense | null;
  feeRequired: number;
  ownerEmail: string;
}

/**
 * Evaluates whether a creator is currently authorized to upload and publish a simulation.
 * Returns allowed: true if the user is the AXIOMSTEM owner OR has remitted the creator fee.
 */
export function checkCreatorUploadPermission(user: UserProfile | null): CreatorUploadCheckResult {
  const userEmail = user?.email || "";
  const isOwner = isAxiomstemOwner(userEmail);

  if (isOwner) {
    return {
      allowed: true,
      isOwner: true,
      license: null,
      feeRequired: 0,
      ownerEmail: AXIOM_OWNER_EMAIL,
    };
  }

  // Check stored license
  const license = getSavedCreatorLicense(userEmail);
  if (license && license.status === "active") {
    return {
      allowed: true,
      isOwner: false,
      license,
      feeRequired: CREATOR_UPLOAD_FEE,
      ownerEmail: AXIOM_OWNER_EMAIL,
    };
  }

  return {
    allowed: false,
    isOwner: false,
    license: null,
    feeRequired: CREATOR_UPLOAD_FEE,
    ownerEmail: AXIOM_OWNER_EMAIL,
  };
}

/**
 * Records a successful creator fee remittance to the AXIOMSTEM owner.
 * Stores locally and syncs with Firestore if authenticated.
 */
export async function recordCreatorUploadPayment(params: {
  creatorUid: string;
  creatorEmail: string;
  creatorName: string;
  tier: "single_simulation" | "creator_pass";
  amountPaid: number;
  paymentMethod: "card" | "school_po" | "grant";
}): Promise<CreatorUploadLicense> {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  const transactionId = `AXM-PUB-${randomNum}`;
  const passId = `creator-pass-${Date.now()}`;

  const license: CreatorUploadLicense = {
    id: passId,
    creatorUid: params.creatorUid || `creator-${Date.now()}`,
    creatorEmail: params.creatorEmail.trim().toLowerCase(),
    creatorName: params.creatorName.trim() || "STEM Simulation Creator",
    ownerEmail: AXIOM_OWNER_EMAIL,
    amountPaid: params.amountPaid,
    currency: "USD",
    tier: params.tier,
    status: "active",
    paymentMethod: params.paymentMethod,
    transactionId,
    purchasedAt: new Date().toISOString(),
    uploadSlotsRemaining: params.tier === "creator_pass" ? 999999 : 1,
  };

  // 1. Save to local storage for immediate persistence
  try {
    const key = `${LOCAL_CREATOR_LICENSE_PREFIX}${license.creatorEmail}`;
    localStorage.setItem(key, JSON.stringify(license));
  } catch (e) {
    console.error("Failed to save creator license locally:", e);
  }

  // 2. Sync to Firestore if authenticated
  if (auth.currentUser && auth.currentUser.uid === params.creatorUid) {
    try {
      await saveCreatorPassToFirestore(auth.currentUser.uid, {
        id: passId,
        creatorUid: auth.currentUser.uid,
        creatorEmail: license.creatorEmail,
        creatorName: license.creatorName,
        ownerEmail: AXIOM_OWNER_EMAIL,
        amountPaid: license.amountPaid,
        currency: "USD",
        tier: license.tier,
        status: "active",
        paymentMethod: license.paymentMethod,
        transactionId: license.transactionId,
        purchasedAt: license.purchasedAt,
      });
    } catch (err) {
      console.warn("Firestore creator pass background sync notice:", err);
    }
  }

  return license;
}
