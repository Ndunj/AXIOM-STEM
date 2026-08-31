import React, { useState } from "react";
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
import {
  Atom,
  Lock,
  LogIn,
  UserPlus,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  School,
  ArrowRight,
  RefreshCw,
  Award,
  Layers,
  FileCode,
  BookOpen,
  Share2,
  AlertCircle,
  KeyRound,
  Send,
  Check,
  Eye,
  EyeOff
} from "lucide-react";

interface AppAuthGateProps {
  onAuthSuccess: (user: UserProfile) => void;
}

export const AppAuthGate: React.FC<AppAuthGateProps> = ({ onAuthSuccess }) => {
  const [authMode, setAuthMode] = useState<"signin" | "signup" | "forgot">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [role, setRole] = useState<UserRole>("teacher");
  const [schoolName, setSchoolName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Recovery state
  const [recoveryStep, setRecoveryStep] = useState<"request" | "verify" | "success">("request");
  const [recoveryCode, setRecoveryCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [generatedCodeHint, setGeneratedCodeHint] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please enter both your email address and password.");
      return;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const user = await signInWithEmail(email, password);
      setSuccessMessage(`Welcome, ${user.displayName}! Access granted.`);
      setTimeout(() => onAuthSuccess(user), 350);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to sign in. Please verify your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !displayName) {
      setErrorMessage("Please enter your name, email, and password.");
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
      setTimeout(() => onAuthSuccess(user), 350);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to register account.");
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
      setErrorMessage(err.message || "Failed to send recovery instructions.");
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
      setErrorMessage("Passwords do not match. Please verify.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);
    try {
      const res = await verifyAndResetPassword(email, recoveryCode, newPassword);
      setSuccessMessage("Password successfully recovered!");
      setRecoveryStep("success");
      if (res.profile) {
        setTimeout(() => onAuthSuccess(res.profile!), 1000);
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Verification failed. Please check your code.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async (directEmail?: string) => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      let user: UserProfile;
      if (directEmail) {
        user = signInWithDirectGoogleAccount(directEmail);
      } else {
        user = await signInWithGoogle();
      }
      setSuccessMessage(`Signed in with Google as ${user.displayName}`);
      setTimeout(() => onAuthSuccess(user), 350);
    } catch (err: any) {
      setErrorMessage(err.message || "Google sign-in was interrupted. You can click 1-Click Sign In below.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickDemo = (demoRole: UserRole) => {
    setIsLoading(true);
    try {
      const user = signInWithDemoRole(demoRole);
      setSuccessMessage(`Signed in as ${user.displayName}`);
      setTimeout(() => onAuthSuccess(user), 300);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to enter demo");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Brand Nav */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-emerald-400 p-0.5 shadow-lg shadow-indigo-500/20 overflow-hidden shrink-0">
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
              <span className="text-base font-black tracking-tight text-white font-mono">
                AXIOM<span className="text-sky-400">STEM</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                PORTAL
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Interactive Simulations &bull; Creator Studio &bull; LMS Sync</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Lock className="w-4 h-4 text-amber-400" />
          <span>Protected Educator &amp; Creator Platform</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12 w-full flex-1 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Hero & Feature Overview */}
        <div className="flex-1 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Authentication Required for Platform Access</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Curriculum-Aligned STEM Simulations &amp; Author Tools
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Please log in or register to access the full simulation catalog, interactive lab builders, Google Classroom &amp; Canvas sync, and automated student PDF worksheet generators.
          </p>

          {/* Value Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <strong className="text-white block">12+ Aligned Simulations</strong>
                <span className="text-slate-400">Physics, Chemistry, Biology &amp; Math</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
              <Share2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <strong className="text-white block">LMS Integration</strong>
                <span className="text-slate-400">Google Classroom, Canvas &amp; Schoology</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
              <BookOpen className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <strong className="text-white block">PDF Lab Worksheets</strong>
                <span className="text-slate-400">Automated student keys &amp; rubrics</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <strong className="text-white block">Creator Studio</strong>
                <span className="text-slate-400">HTML simulator importer &amp; standards tagger</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Authentication Card */}
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-5 shrink-0">
          {/* Tab Switcher */}
          <div className="grid grid-cols-3 gap-1 p-1 bg-slate-950 rounded-2xl border border-slate-800 text-xs font-semibold">
            <button
              onClick={() => {
                setAuthMode("signin");
                setErrorMessage(null);
              }}
              className={`py-2 rounded-xl transition-all cursor-pointer ${
                authMode === "signin"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setAuthMode("signup");
                setErrorMessage(null);
              }}
              className={`py-2 rounded-xl transition-all cursor-pointer ${
                authMode === "signup"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Register
            </button>
            <button
              onClick={() => {
                setAuthMode("forgot");
                setRecoveryStep("request");
                setErrorMessage(null);
              }}
              className={`py-2 rounded-xl transition-all cursor-pointer ${
                authMode === "forgot"
                  ? "bg-sky-600 text-white shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Forgot?
            </button>
          </div>

          {/* Alert Messages */}
          {errorMessage && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-300 rounded-xl text-xs flex items-start gap-2">
              <span className="shrink-0 mt-0.5 font-bold">!</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs flex items-start gap-2 animate-pulse">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* TAB 1: SIGN IN FORM */}
          {authMode === "signin" && (
            <form onSubmit={handleSignIn} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="teacher@school.edu or ndunj123@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-300">Password</label>
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode("forgot");
                      setRecoveryStep("request");
                      setErrorMessage(null);
                    }}
                    className="text-[11px] text-sky-400 hover:text-sky-300 font-medium hover:underline cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/25 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    <span>Sign In to Axiom STEM</span>
                  </>
                )}
              </button>

              <div className="relative my-3">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-800" />
                </div>
                <div className="relative flex justify-center text-[10px] uppercase font-semibold text-slate-500">
                  <span className="bg-slate-900 px-2">Or continue with</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleGoogleSignIn()}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white text-xs font-semibold transition-all cursor-pointer"
              >
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
                <span>Sign in with Google</span>
              </button>

              {/* 1-Click Instant User Google Sign-In */}
              <button
                type="button"
                onClick={() => handleGoogleSignIn("kayinebi123@gmail.com")}
                disabled={isLoading}
                className="w-full py-2 px-3 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-500/30 text-indigo-200 text-xs font-semibold flex items-center justify-between transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="truncate">Instant Google: <strong>kayinebi123@gmail.com</strong></span>
                </div>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold">1-Click</span>
              </button>

              {/* Demo Roles */}
              <div className="pt-2 border-t border-slate-800/80">
                <div className="text-[11px] font-semibold text-slate-400 mb-1.5">Quick Demo Persona:</div>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleQuickDemo("teacher")}
                    className="p-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left text-xs text-slate-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                    <span>Teacher Demo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickDemo("creator")}
                    className="p-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left text-xs text-slate-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Creator Studio</span>
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* TAB 3: FORGOT / PASSWORD RECOVERY FORM */}
          {authMode === "forgot" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                <span className="font-semibold text-sky-400 flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Account Password Recovery</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {recoveryStep === "request" ? "1. Email Request" : recoveryStep === "verify" ? "2. Verification" : "Complete"}
                </span>
              </div>

              {recoveryStep === "request" && (
                <form onSubmit={handleRequestPasswordReset} className="space-y-3.5">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Enter your registered account email address. We will verify your account and issue a secure password reset code.
                  </p>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Account Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="teacher@school.edu or ndunj123@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
                      required
                    />
                  </div>

                  {/* Fast selection */}
                  <div className="space-y-1">
                    <div className="text-[11px] text-slate-400">Quick selection:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: "Dr. Reed (Teacher)", email: "evelyn.reed@science-academy.edu" },
                        { label: "ndunj123 (Author)", email: "ndunj123@gmail.com" }
                      ].map((item) => (
                        <button
                          key={item.email}
                          type="button"
                          onClick={() => setEmail(item.email)}
                          className="px-2 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[10px] text-slate-300 cursor-pointer"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setAuthMode("signin")}
                      className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Back to Sign In
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-md shadow-sky-600/25 cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
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
                <form onSubmit={handleVerifyAndReset} className="space-y-3">
                  <div className="p-2.5 bg-sky-500/10 border border-sky-500/30 rounded-xl text-xs text-sky-200">
                    <span className="font-semibold block text-white">Reset instructions prepared!</span>
                    <span className="text-[11px] text-sky-300">Account: <strong>{email}</strong></span>
                  </div>

                  {generatedCodeHint && (
                    <div className="p-2.5 bg-indigo-950/80 border border-indigo-500/30 rounded-xl flex items-center justify-between text-xs text-indigo-200">
                      <span>Code: <strong className="font-mono text-white tracking-widest">{generatedCodeHint}</strong></span>
                      <button
                        type="button"
                        onClick={() => setRecoveryCode(generatedCodeHint)}
                        className="px-2 py-0.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold cursor-pointer"
                      >
                        Auto-Fill
                      </button>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">6-Digit Code</label>
                    <input
                      type="text"
                      maxLength={6}
                      value={recoveryCode}
                      onChange={(e) => setRecoveryCode(e.target.value.replace(/\D/g, ""))}
                      placeholder="e.g. 889900"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono tracking-widest focus:outline-none focus:border-sky-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">New Password</label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        minLength={6}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500 pr-10"
                        required
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

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Confirm New Password</label>
                    <input
                      type={showNewPassword ? "text" : "password"}
                      minLength={6}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                      required
                    />
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
                      className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/25 cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Reset &amp; Enter</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {recoveryStep === "success" && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-bold text-white">Password Updated</h4>
                  <p className="text-xs text-emerald-200">
                    Signing you into Axiom STEM now...
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: REGISTER FORM */}
          {authMode === "signup" && (
            <form onSubmit={handleSignUp} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="e.g. Dr. Maria Garcia"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="maria@stemacademy.edu"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Role</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as UserRole)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                  >
                    <option value="teacher">STEM Educator</option>
                    <option value="creator">Creator / Author</option>
                    <option value="admin">District Admin</option>
                    <option value="student">Student</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">School / Org</label>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="Oakridge STEM High"
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 6 characters"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/25 cursor-pointer disabled:opacity-50 mt-2"
              >
                {isLoading ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    <span>Create Free Account &amp; Enter</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Bottom Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/90 py-4 px-6 text-center text-xs text-slate-500">
        <span>&copy; {new Date().getFullYear()} Axiom STEM Laboratory Marketplace. Protected Interactive Educational Software.</span>
      </footer>
    </div>
  );
};
