import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { LANG_STORAGE_KEY } from '../data/site';
import type { Language } from '../types/portfolio';
import { translations } from '../data/translations';

export type Translations = (typeof translations)['en'];

interface LanguageContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  try {
    return localStorage.getItem(LANG_STORAGE_KEY) === 'de' ? 'de' : 'en';
  } catch {
    return 'en';
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Language) => {
    setLangState(l);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, l);
    } catch {
      /* storage unavailable — language still applies for this visit */
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
