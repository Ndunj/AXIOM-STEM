import React, { useState } from "react";
import { signInWithGoogle } from "../services/firebaseAuth";
import { UserProfile } from "../types";
import { Loader2 } from "lucide-react";

interface GoogleSignInButtonProps {
  onSuccess?: (user: UserProfile) => void;
  onError?: (error: Error) => void;
  variant?: "header" | "full" | "light";
  className?: string;
  label?: string;
}

export const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({
  onSuccess,
  onError,
  variant = "header",
  className = "",
  label
}) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSignIn = async () => {
    if (loading) return;
    setLoading(true);
    setErrorMsg(null);
    try {
      const user = await signInWithGoogle();
      if (onSuccess) {
        onSuccess(user);
      }
    } catch (err: any) {
      console.error("Google sign in error:", err);
      const msg = err?.message || "Google Sign-In failed. Please try again.";
      setErrorMsg(msg);
      if (onError) {
        onError(err instanceof Error ? err : new Error(msg));
      }
    } finally {
      setLoading(false);
    }
  };

  // Official Google G SVG logo
  const GoogleLogo = (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );

  if (variant === "header") {
    return (
      <div className="relative inline-flex items-center">
        <button
          type="button"
          id="google-signin-header-btn"
          onClick={handleSignIn}
          disabled={loading}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs border border-slate-200 shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer disabled:opacity-60 ${className}`}
          title="Sign in with Google Account (Firebase Auth)"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin text-slate-600" /> : GoogleLogo}
          <span className="hidden sm:inline">{label || "Sign in with Google"}</span>
          <span className="sm:hidden">Google</span>
        </button>
        {errorMsg && (
          <div className="absolute top-full mt-1.5 right-0 z-50 bg-rose-950/90 text-rose-200 text-[11px] px-2.5 py-1 rounded-lg border border-rose-800 shadow-lg whitespace-nowrap">
            {errorMsg}
          </div>
        )}
      </div>
    );
  }

  if (variant === "light") {
    return (
      <div className="w-full">
        <button
          type="button"
          id="google-signin-light-btn"
          onClick={handleSignIn}
          disabled={loading}
          className={`w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm border border-slate-300 shadow-sm hover:shadow transition-all active:scale-[0.99] cursor-pointer disabled:opacity-60 ${className}`}
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin text-slate-600" /> : GoogleLogo}
          <span>{label || "Sign in with Google"}</span>
        </button>
        {errorMsg && (
          <p className="mt-1.5 text-xs text-rose-400 text-center">{errorMsg}</p>
        )}
      </div>
    );
  }

  // Full variant (default dark-mode styled card)
  return (
    <div className="w-full">
      <button
        type="button"
        id="google-signin-full-btn"
        onClick={handleSignIn}
        disabled={loading}
        className={`w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm border border-slate-200 shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer disabled:opacity-60 ${className}`}
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin text-slate-600" /> : GoogleLogo}
        <span>{label || "Sign in with Google"}</span>
      </button>
      {errorMsg && (
        <p className="mt-1.5 text-xs text-rose-400 text-center">{errorMsg}</p>
      )}
    </div>
  );
};
