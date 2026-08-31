import React, { useState, useEffect } from "react";
import {
  X,
  Mail,
  Lock,
  User as UserIcon,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  GraduationCap,
  ShieldCheck,
  School,
  ArrowRight,
  Eye,
  EyeOff,
  Atom,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  KeyRound,
  Compass,
  RefreshCw,
  Send,
  Check
} from "lucide-react";
import { UserProfile, UserRole } from "../types";
import {
  signInWithEmail,
  signUpWithEmail,
  signInWithGoogle,
  signInWithDirectGoogleAccount,
  signInWithDemoRole,
  resetUserPassword,
  verifyAndResetPassword
} from "../services/authService";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (user: UserProfile) => void;
  initialTab?: "signin" | "signup";
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onAuthSuccess,
  initialTab = "signin"
}) => {
  const [tab, setTab] = useState<"signin" | "signup" | "forgot">(initialTab);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [role, setRole] = useState<UserRole>("teacher");
  const [showPassword, setShowPassword] = useState(false);

  // Password Recovery state
  const [recoveryStep, setRecoveryStep] = useState<"request" | "verify" | "success">("request");
  const [recoveryCode, setRecoveryCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [generatedCodeHint, setGeneratedCodeHint] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showGoogleHelp, setShowGoogleHelp] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTab(initialTab);
      setErrorMessage(null);
      setSuccessMessage(null);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setDisplayName("");
    setSchoolName("");
    setRecoveryStep("request");
    setRecoveryCode("");
    setNewPassword("");
    setConfirmPassword("");
    setGeneratedCodeHint(null);
    setErrorMessage(null);
    setSuccessMessage(null);
    setShowGoogleHelp(false);
  };

  const handleSwitchTab = (newTab: "signin" | "signup" | "forgot") => {
    setTab(newTab);
    setErrorMessage(null);
    setSuccessMessage(null);
    if (newTab === "forgot") {
      setRecoveryStep("request");
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please enter both your email address and password.");
      return;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const user = await signInWithEmail(email, password);
      setSuccessMessage(`Welcome back, ${user.displayName}!`);
      setTimeout(() => {
        onAuthSuccess(user);
        onClose();
        resetForm();
      }, 400);
    } catch (err: any) {
      setErrorMessage(err.message || "Unable to sign in. Please verify your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !displayName) {
      setErrorMessage("Please fill in your name, email, and password.");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const user = await signUpWithEmail(email, password, displayName, role, schoolName);
      setSuccessMessage(`Account created successfully! Welcome to Axiom STEM.`);
      setTimeout(() => {
        onAuthSuccess(user);
        onClose();
        resetForm();
      }, 500);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to create account.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async (directEmail?: string) => {
    setIsGoogleLoading(true);
    setErrorMessage(null);
    try {
      let user: UserProfile;
      if (directEmail) {
        user = signInWithDirectGoogleAccount(directEmail);
      } else {
        user = await signInWithGoogle();
      }
      setSuccessMessage(`Signed in with Google as ${user.displayName}`);
      setTimeout(() => {
        onAuthSuccess(user);
        onClose();
        resetForm();
      }, 350);
    } catch (err: any) {
      const msg = err.message || "Google sign-in was interrupted.";
      setErrorMessage(msg);
      setShowGoogleHelp(true);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleQuickDemoLogin = (roleToUse: UserRole) => {
    setIsLoading(true);
    try {
      const user = signInWithDemoRole(roleToUse);
      setSuccessMessage(`Signed in as ${user.displayName} (${user.role.toUpperCase()})`);
      setTimeout(() => {
        onAuthSuccess(user);
        onClose();
        resetForm();
      }, 300);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to switch role");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequestPasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage("Please enter the email address for your account.");
      return;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const res = await resetUserPassword(email);
      setSuccessMessage(res.message);
      if (res.recoveryCode) {
        setGeneratedCodeHint(res.recoveryCode);
        setRecoveryCode(res.recoveryCode);
      }
      setRecoveryStep("verify");
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to send reset email.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyAndReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recoveryCode) {
      setErrorMessage("Please enter the 6-digit recovery code.");
      return;
    }
    if (!newPassword || newPassword.length < 6) {
      setErrorMessage("New password must be at least 6 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage("New passwords do not match. Please retype carefully.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);
    try {
      const res = await verifyAndResetPassword(email, recoveryCode, newPassword);
      setSuccessMessage("Password successfully recovered and updated!");
      setRecoveryStep("success");
      if (res.profile) {
        setTimeout(() => {
          onAuthSuccess(res.profile!);
          onClose();
          resetForm();
        }, 1200);
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Password recovery failed. Please verify your code.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8">
        {/* Top Gradient Header */}
        <div className="relative bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 px-6 pt-6 pb-5 border-b border-slate-800">
          <button
            onClick={() => {
              onClose();
              resetForm();
            }}
            className="absolute right-5 top-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-purple-600 p-0.5 shadow-lg shadow-indigo-500/20 shrink-0 overflow-hidden">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center overflow-hidden">
                <img
                  src="/axiom-stem-logo.png"
                  alt="AXIOM STEM Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain p-0.5"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = "none";
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white tracking-tight font-mono">
                  AXIOM<span className="text-sky-400">STEM</span>
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {tab === "signup" ? "New Account" : "Educator Portal"}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {tab === "signup"
                  ? "Join educators & schools creating interactive STEM learning"
                  : tab === "forgot"
                  ? "Reset your educator password"
                  : "Sign in to access your lab library, LMS sync, and licenses"}
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 mt-5 p-1 bg-slate-950/70 border border-slate-800/80 rounded-2xl">
            <button
              type="button"
              onClick={() => handleSwitchTab("signin")}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                tab === "signin"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => handleSwitchTab("signup")}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                tab === "signup"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Status Banners */}
          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs space-y-2.5 animate-in fade-in">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span>{errorMessage}</span>
                </div>
              </div>
              
              {/* Quick Google Fallback Button inside error banner */}
              <div className="pt-1 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleGoogleAuth("kayinebi123@gmail.com")}
                  className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-[11px] flex items-center gap-1.5 transition-all shadow cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>1-Click Sign In as kayinebi123@gmail.com</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemoLogin("teacher")}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-[11px] transition-all cursor-pointer"
                >
                  Enter as STEM Teacher
                </button>
              </div>
            </div>
          )}

          {successMessage && (
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs flex items-center gap-2.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* TAB 1: SIGN IN */}
          {tab === "signin" && (
            <div className="space-y-4">
              {/* Google Sign In Options */}
              <div className="space-y-2">
                {/* Standard Google Popup */}
                <button
                  type="button"
                  onClick={() => handleGoogleAuth()}
                  disabled={isGoogleLoading || isLoading}
                  className="w-full py-2.5 px-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center gap-2.5 shadow-md shadow-white/10 transition-all cursor-pointer disabled:opacity-50 active:scale-[0.99]"
                >
                  {isGoogleLoading ? (
                    <div className="w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  )}
                  <span>Continue with Google</span>
                </button>

                {/* 1-Click Instant Google User Sign-In */}
                <button
                  type="button"
                  onClick={() => handleGoogleAuth("kayinebi123@gmail.com")}
                  disabled={isGoogleLoading || isLoading}
                  className="w-full py-2 px-3 rounded-2xl bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-500/30 text-indigo-200 text-xs font-semibold flex items-center justify-between transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=kayinebi123@gmail.com"
                      alt="Google User Avatar"
                      className="w-5 h-5 rounded-full border border-indigo-400/40"
                    />
                    <span className="truncate">Sign in as <strong>kayinebi123@gmail.com</strong></span>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-bold">1-Click</span>
                </button>
              </div>

              {/* Google Verification / Help Expandable Tip */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setShowGoogleHelp((prev) => !prev)}
                  className="text-[11px] text-slate-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <HelpCircle className="w-3 h-3 text-sky-400" />
                  <span>Google sign-in tips &amp; domain whitelisting</span>
                </button>

                {showGoogleHelp && (
                  <div className="mt-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 text-left space-y-1.5 animate-in fade-in">
                    <p className="font-semibold text-white flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Authentication notes:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-400">
                      <li>Use the <strong>1-Click Instant Sign In</strong> above to log in instantly without popup blocks.</li>
                      <li>In the Google login popup, if prompted with &ldquo;Google hasn&rsquo;t verified this app&rdquo;, click <strong>Advanced &rarr; Go to Axiom STEM (unsafe)</strong>.</li>
                      <li>Firebase project: <code className="text-sky-300">galvanized-cinema-fxctm</code></li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-800" />
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">or email</span>
                <div className="flex-1 h-px bg-slate-800" />
              </div>

              {/* Email Sign In Form */}
              <form onSubmit={handleEmailSignIn} className="space-y-4">
                {/* Email Input */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="teacher@school.edu or author@axiom.stem"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-slate-300">Password</label>
                    <button
                      type="button"
                      onClick={() => handleSwitchTab("forgot")}
                      className="text-[11px] text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-10 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || isGoogleLoading}
                  className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 transition-all cursor-pointer disabled:opacity-50 active:scale-[0.99]"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Sign In to Axiom STEM</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* 1-Click Quick Demo Profiles */}
              <div className="pt-2 border-t border-slate-800/80">
                <div className="text-[11px] font-semibold text-slate-400 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>1-Click Instant Persona Sign-In:</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin("teacher")}
                    className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400">
                      <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                      <span>STEM Teacher</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5 truncate">Dr. Evelyn Reed</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin("creator")}
                    className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>Simulation Author</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5 truncate">Creator Studio Mode</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin("student")}
                    className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                      <Atom className="w-3.5 h-3.5 shrink-0" />
                      <span>Student Learner</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5 truncate">Alex Chen (Physics)</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin("admin")}
                    className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-purple-400">
                      <School className="w-3.5 h-3.5 shrink-0" />
                      <span>District Admin</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5 truncate">Dept Science Director</div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CREATE ACCOUNT */}
          {tab === "signup" && (
            <form onSubmit={handleEmailSignUp} className="space-y-3.5">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Full Name</label>
                <div className="relative">
                  <UserIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Dr. Sarah Jenkins"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="s.jenkins@highschool.edu"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Password (min 6 characters)</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-10 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Role Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Primary Role</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "teacher", label: "STEM Teacher", icon: GraduationCap },
                    { id: "admin", label: "District / Dept Admin", icon: School },
                    { id: "creator", label: "Simulation Author", icon: ShieldCheck },
                    { id: "student", label: "Student", icon: Atom }
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = role === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setRole(item.id as UserRole)}
                        className={`p-2 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                          isSelected
                            ? "bg-indigo-600/20 border-indigo-500 text-white"
                            : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-indigo-400" : "text-slate-500"}`} />
                        <span className="text-xs font-semibold">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* School / Institution Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">School or Institution (Optional)</label>
                <div className="relative">
                  <School className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="Lincoln High School / Science Dept"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer disabled:opacity-50 active:scale-[0.99]"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Create Free Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* TAB 3: FORGOT / RECOVER PASSWORD */}
          {tab === "forgot" && (
            <div className="space-y-4 animate-in fade-in">
              {/* Step indicator */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-semibold text-slate-400">
                <span className="flex items-center gap-1.5 text-sky-400">
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Password Recovery &amp; Reset</span>
                </span>
                <span className="bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800 font-mono text-[10px] text-slate-400">
                  {recoveryStep === "request" ? "Step 1 of 2: Email" : recoveryStep === "verify" ? "Step 2 of 2: Verify & Reset" : "Complete"}
                </span>
              </div>

              {recoveryStep === "request" && (
                <form onSubmit={handleRequestPasswordReset} className="space-y-4">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Enter the email address associated with your STEM educator, creator, or student account. We will send you an official reset link and a secure 6-digit recovery code.
                  </p>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Account Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="educator@school.edu or ndunj123@gmail.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  {/* Quick Select Preset Email Pill (for instant testing) */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Quick-select account for demo recovery:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: "Dr. Evelyn Reed", email: "evelyn.reed@science-academy.edu" },
                        { label: "Author ndunj123", email: "ndunj123@gmail.com" },
                        { label: "Alex Rivera", email: "alex.rivera@student.oakridge.edu" }
                      ].map((item) => (
                        <button
                          key={item.email}
                          type="button"
                          onClick={() => setEmail(item.email)}
                          className="px-2 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[11px] text-slate-300 transition-colors cursor-pointer"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => handleSwitchTab("signin")}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Back to Sign In
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-md shadow-sky-600/25 cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Recovery Code</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {recoveryStep === "verify" && (
                <form onSubmit={handleVerifyAndReset} className="space-y-3.5">
                  <div className="p-3 bg-sky-500/10 border border-sky-500/30 rounded-2xl text-xs text-sky-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Recovery instructions dispatched!</span>
                      <span className="text-sky-300 text-[11px]">
                        Target account: <strong className="text-white">{email}</strong>
                      </span>
                    </div>
                  </div>

                  {generatedCodeHint && (
                    <div className="p-2.5 bg-indigo-950/70 border border-indigo-500/30 rounded-xl flex items-center justify-between text-xs text-indigo-200">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Security Code Generated: <strong className="font-mono text-white tracking-widest">{generatedCodeHint}</strong></span>
                      </span>
                      <button
                        type="button"
                        onClick={() => setRecoveryCode(generatedCodeHint)}
                        className="px-2 py-0.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold cursor-pointer transition-all"
                      >
                        Auto-Fill
                      </button>
                    </div>
                  )}

                  {/* 6-Digit Recovery Code */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">6-Digit Verification Code</label>
                    <div className="relative">
                      <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        maxLength={6}
                        value={recoveryCode}
                        onChange={(e) => setRecoveryCode(e.target.value.replace(/\D/g, ""))}
                        placeholder="e.g. 889900"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white font-mono tracking-widest placeholder-slate-500 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  {/* New Password */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">New Password (min. 6 characters)</label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type={showNewPassword ? "text" : "password"}
                        required
                        minLength={6}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-10 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword((p) => !p)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                      >
                        {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Confirm New Password</label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type={showNewPassword ? "text" : "password"}
                        required
                        minLength={6}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setRecoveryStep("request")}
                      className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Change Email
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/25 cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Reset Password &amp; Sign In</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {recoveryStep === "success" && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Password Recovery Complete</h4>
                  <p className="text-xs text-emerald-200">
                    Your password has been successfully updated. Logging you into Axiom STEM now...
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-slate-950 px-6 py-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Enterprise STEM EdTech &bull; FERPA &amp; COPPA Compliant</span>
          <span className="font-mono text-slate-400">v2.4 Secure Auth</span>
        </div>
      </div>
    </div>
  );
};
