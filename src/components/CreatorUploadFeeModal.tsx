import React, { useState } from "react";
import { UserProfile, CreatorUploadLicense } from "../types";
import {
  AXIOM_OWNER_EMAIL,
  CREATOR_UPLOAD_FEE,
  CREATOR_STUDIO_PASS_FEE,
  recordCreatorUploadPayment,
} from "../services/creatorLicenseService";
import {
  X,
  ShieldCheck,
  CreditCard,
  Building2,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
  UploadCloud,
  FileCode2,
  Receipt,
  HelpCircle
} from "lucide-react";

interface CreatorUploadFeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  onPaymentSuccess: (license: CreatorUploadLicense) => void;
}

export const CreatorUploadFeeModal: React.FC<CreatorUploadFeeModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onPaymentSuccess,
}) => {
  const [selectedTier, setSelectedTier] = useState<"single_simulation" | "creator_pass">("single_simulation");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "school_po">("card");

  // Form states
  const [creatorName, setCreatorName] = useState(currentUser?.displayName || "");
  const [creatorEmail, setCreatorEmail] = useState(currentUser?.email || "");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [poNumber, setPoNumber] = useState("");
  const [institutionName, setInstitutionName] = useState(currentUser?.schoolName || "Independent STEM Laboratory");

  const [isProcessing, setIsProcessing] = useState(false);
  const [completedLicense, setCompletedLicense] = useState<CreatorUploadLicense | null>(null);

  if (!isOpen) return null;

  const currentFee = selectedTier === "single_simulation" ? CREATOR_UPLOAD_FEE : CREATOR_STUDIO_PASS_FEE;

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/\D/g, "").slice(0, 16);
    const formatted = v.match(/.{1,4}/g)?.join(" ") || v;
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (v.length >= 3) {
      v = `${v.slice(0, 2)}/${v.slice(2)}`;
    }
    setCardExpiry(v);
  };

  const handleProcessPayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!creatorEmail.trim()) {
      alert("Please enter your creator email address.");
      return;
    }

    setIsProcessing(true);

    try {
      // Simulate high-security payment gateway authorization with AXIOMSTEM owner account
      await new Promise((resolve) => setTimeout(resolve, 850));

      const license = await recordCreatorUploadPayment({
        creatorUid: currentUser?.uid || `creator-${Date.now()}`,
        creatorEmail: creatorEmail.trim(),
        creatorName: creatorName.trim() || "STEM Creator",
        tier: selectedTier,
        amountPaid: currentFee,
        paymentMethod,
      });

      setCompletedLicense(license);
      setIsProcessing(false);
    } catch (err) {
      console.error("Payment processing error:", err);
      alert("Payment processing encountered an issue. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div
        id="creator-fee-modal-container"
        className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto"
      >
        {/* Top Gradient Ribbon */}
        <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500"></div>

        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-slate-950/60">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                <Lock className="w-3 h-3" /> Creator Publishing Policy
              </span>
              <span className="text-[11px] text-slate-400">Step 1 of 2: Authorization</span>
            </div>
            <h2 className="text-xl font-black text-white tracking-tight">
              Creator Simulation Publishing License
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Before another creator is allowed to upload or publish an interactive simulation, a
              publishing fee must be paid directly to the AXIOMSTEM platform owner.
            </p>
          </div>

          <button
            id="close-creator-fee-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Remittance Recipient Notice Banner */}
        <div className="px-6 py-3 bg-emerald-950/40 border-b border-emerald-800/40 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-slate-300">
              Direct Payee:{" "}
              <strong className="text-emerald-300 font-mono">{AXIOM_OWNER_EMAIL}</strong>
            </span>
          </div>
          <span className="text-emerald-400/90 font-semibold text-[11px] flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> AXIOMSTEM Owner Account
          </span>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {completedLicense ? (
            /* Confirmation & Receipt Screen */
            <div className="space-y-5 text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-black text-white">Creator Publishing License Activated!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your simulation publishing fee of{" "}
                  <strong className="text-emerald-400">${completedLicense.amountPaid}.00 USD</strong> has been
                  successfully remitted to AXIOMSTEM Owner (
                  <span className="font-mono text-emerald-300">{AXIOM_OWNER_EMAIL}</span>).
                </p>
              </div>

              {/* Receipt Details Card */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-2 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800/80">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Receipt className="w-3.5 h-3.5 text-slate-500" /> Transaction ID
                  </span>
                  <span className="text-white font-mono font-bold">{completedLicense.transactionId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Payee (Platform Owner)</span>
                  <span className="text-emerald-400 font-medium">{completedLicense.ownerEmail}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Creator Account</span>
                  <span className="text-slate-200">{completedLicense.creatorEmail}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">License Tier</span>
                  <span className="text-slate-200 capitalize">
                    {completedLicense.tier.replace("_", " ")}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-800/80 font-bold text-sm">
                  <span className="text-white">Amount Remitted</span>
                  <span className="text-emerald-400 font-mono">${completedLicense.amountPaid}.00 USD</span>
                </div>
              </div>

              <button
                id="proceed-upload-after-fee-btn"
                onClick={() => onPaymentSuccess(completedLicense)}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20 active:scale-98 transition-all"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Proceed to Upload Simulation Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Checkout & License Selection Form */
            <form onSubmit={handleProcessPayment} className="space-y-5">
              {/* Tier Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Select Publishing Authorization Tier
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Single Simulation Option */}
                  <div
                    onClick={() => setSelectedTier("single_simulation")}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all relative ${
                      selectedTier === "single_simulation"
                        ? "bg-emerald-500/10 border-emerald-500/50 shadow-md shadow-emerald-500/10"
                        : "bg-slate-950 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <FileCode2 className="w-4 h-4 text-emerald-400" />
                          <h4 className="text-sm font-bold text-white">Single Sim Slot</h4>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">
                          1 Approved Simulation in Global Marketplace
                        </p>
                      </div>
                      <span className="text-base font-mono font-black text-emerald-400">
                        ${CREATOR_UPLOAD_FEE}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-1 text-[11px] text-slate-300">
                      <li className="flex items-center gap-1 text-emerald-400">
                        ✓ Lifetime Sandboxed Hosting
                      </li>
                      <li className="flex items-center gap-1 text-slate-400">
                        ✓ LTI 1.3 Canvas & Classroom Key
                      </li>
                      <li className="flex items-center gap-1 text-slate-400">
                        ✓ Keep 100% of Teacher Sales
                      </li>
                    </ul>
                  </div>

                  {/* Creator Studio Pass Option */}
                  <div
                    onClick={() => setSelectedTier("creator_pass")}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all relative ${
                      selectedTier === "creator_pass"
                        ? "bg-sky-500/10 border-sky-500/50 shadow-md shadow-sky-500/10"
                        : "bg-slate-950 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-sky-400" />
                          <h4 className="text-sm font-bold text-white">Creator Studio Pass</h4>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">
                          Unlimited Uploads & Authoring Tools
                        </p>
                      </div>
                      <span className="text-base font-mono font-black text-sky-400">
                        ${CREATOR_STUDIO_PASS_FEE}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-1 text-[11px] text-slate-300">
                      <li className="flex items-center gap-1 text-sky-400">
                        ✓ Unlimited Simulation Uploads
                      </li>
                      <li className="flex items-center gap-1 text-slate-400">
                        ✓ Verified Author Badge
                      </li>
                      <li className="flex items-center gap-1 text-slate-400">
                        ✓ District Catalog Featured
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Creator Info Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-slate-300 font-medium">Creator / Author Name</label>
                  <input
                    type="text"
                    required
                    value={creatorName}
                    onChange={(e) => setCreatorName(e.target.value)}
                    placeholder="e.g. Dr. Jordan Vance"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300 font-medium">Creator Email</label>
                  <input
                    type="email"
                    required
                    value={creatorEmail}
                    onChange={(e) => setCreatorEmail(e.target.value)}
                    placeholder="creator@stem-lab.org"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono"
                  />
                </div>
              </div>

              {/* Payment Method Switcher */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Remittance Method
                  </label>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-emerald-400" /> Direct Transfer to Owner
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-medium cursor-pointer transition-all ${
                      paymentMethod === "card"
                        ? "bg-slate-800 border-emerald-500 text-white"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Credit / Debit Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("school_po")}
                    className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-medium cursor-pointer transition-all ${
                      paymentMethod === "school_po"
                        ? "bg-slate-800 border-emerald-500 text-white"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>School Grant / PO</span>
                  </button>
                </div>

                {paymentMethod === "card" ? (
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-400">Card Number</label>
                      <input
                        type="text"
                        required
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="4242 4242 4242 4242"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 font-mono focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] text-slate-400">Expires (MM/YY)</label>
                        <input
                          type="text"
                          required
                          value={cardExpiry}
                          onChange={handleExpiryChange}
                          placeholder="12/28"
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 font-mono focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] text-slate-400">Security CVC</label>
                        <input
                          type="text"
                          required
                          maxLength={4}
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, ""))}
                          placeholder="849"
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 font-mono focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-400">University / Lab Affiliation</label>
                      <input
                        type="text"
                        required
                        value={institutionName}
                        onChange={(e) => setInstitutionName(e.target.value)}
                        placeholder="Stanford Physics Lab / Axiom Partner Academy"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-400">Grant / PO Voucher Reference</label>
                      <input
                        type="text"
                        required
                        value={poNumber}
                        onChange={(e) => setPoNumber(e.target.value)}
                        placeholder="PO-AXM-STEM-2026-081"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 font-mono focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Remittance Total Breakdown */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Simulation Publishing Slot Fee</span>
                  <span className="font-mono text-slate-200">${currentFee}.00 USD</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Payee (AXIOMSTEM Platform Owner)</span>
                  <span className="font-mono text-emerald-400">{AXIOM_OWNER_EMAIL}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Educational Catalog Hosting Tax</span>
                  <span className="font-mono text-emerald-400">$0.00 (Exempt)</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-800 font-bold text-sm">
                  <span className="text-white">Total Amount Due</span>
                  <span className="text-emerald-400 font-mono text-base">${currentFee}.00 USD</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                id="submit-creator-fee-payment-btn"
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 disabled:opacity-50 text-slate-950 font-black text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20 active:scale-98 transition-all"
              >
                {isProcessing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                    <span>Remitting ${currentFee}.00 to {AXIOM_OWNER_EMAIL}...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Pay ${currentFee}.00 to AXIOMSTEM Owner & Unlock Upload</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>Official AXIOMSTEM Marketplace Protection • Instant Creator Authorization</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
