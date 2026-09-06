import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { LanguageCode, LanguageInfo, SUPPORTED_LANGUAGES, TranslationKey } from "./types";
import { translations } from "./translations";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  dir: "ltr" | "rtl";
  languages: LanguageInfo[];
  currentLanguageInfo: LanguageInfo;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem("axiom_language");
      if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
        return saved as LanguageCode;
      }
    } catch {
      // ignore
    }
    // Strict requirement: "let English be the default language of this app"
    return "en";
  });

  const setLanguage = (newLang: LanguageCode) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem("axiom_language", newLang);
    } catch {
      // ignore
    }
  };

  const currentLanguageInfo = useMemo(() => {
    return (
      SUPPORTED_LANGUAGES.find((l) => l.code === language) ||
      SUPPORTED_LANGUAGES[0]
    );
  }, [language]);

  const dir = currentLanguageInfo.dir;

  // Sync with document element attributes for natural directionality and screen readers
  useEffect(() => {
    try {
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
    } catch {
      // ignore
    }
  }, [language, dir]);

  const t = useMemo(() => {
    return (key: TranslationKey, params?: Record<string, string | number>): string => {
      const langDict = translations[language] || translations.en;
      let text = langDict[key] || translations.en[key] || key;

      if (params) {
        Object.entries(params).forEach(([paramKey, value]) => {
          text = text.replace(new RegExp(`\\{${paramKey}\\}`, "g"), String(value));
        });
      }

      return text;
    };
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        dir,
        languages: SUPPORTED_LANGUAGES,
        currentLanguageInfo,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
