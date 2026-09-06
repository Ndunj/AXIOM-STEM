import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageCode } from "../i18n/types";
import { Globe, Check, ChevronDown } from "lucide-react";

interface LanguageSelectorProps {
  compact?: boolean;
  className?: string;
  id?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  compact = false,
  className = "",
  id = "language-selector",
}) => {
  const { language, setLanguage, languages, currentLanguageInfo, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={containerRef} id={id}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-1.5 rounded-xl border transition-all cursor-pointer select-none ${
          compact
            ? "px-2.5 py-1 text-xs bg-slate-900/90 hover:bg-slate-800 text-slate-200 border-slate-700/80 hover:border-slate-600 shadow-sm"
            : "px-3 py-1.5 text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-800 hover:border-slate-700 shadow-sm"
        } ${isOpen ? "ring-2 ring-sky-500/50 border-sky-500" : ""}`}
        title={t("selectLanguage")}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
        <span className="text-sm leading-none" role="img" aria-label={currentLanguageInfo.name}>
          {currentLanguageInfo.flag}
        </span>
        <span className="font-semibold text-white tracking-wide">
          {compact ? currentLanguageInfo.code.toUpperCase() : currentLanguageInfo.nativeName}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-slate-400 transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180 text-sky-400" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label={t("languages")}
          className="absolute right-0 mt-2 w-56 max-h-80 overflow-y-auto bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl p-1.5 z-50 animate-in fade-in duration-150 space-y-0.5 scrollbar-thin scrollbar-thumb-slate-700"
        >
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800/80 flex items-center justify-between">
            <span>{t("selectLanguage")}</span>
            <span className="text-[9px] font-mono text-sky-400">{languages.length} options</span>
          </div>

          <div className="py-1">
            {languages.map((item) => {
              const isSelected = item.code === language;
              return (
                <button
                  key={item.code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(item.code)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs text-left cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-sky-500/15 text-sky-300 font-bold border border-sky-500/30"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="text-base leading-none shrink-0" role="img" aria-label={item.name}>
                      {item.flag}
                    </span>
                    <div className="truncate">
                      <div className="font-medium truncate">{item.nativeName}</div>
                      <div className="text-[10px] text-slate-400">{item.name}</div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 ml-1.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
