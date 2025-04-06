'use client'

import { createContext, useState, useContext } from 'react';

interface LanguageContextProps {
  children: React.ReactNode;
}

interface LanguageContextValue {
  language: string;
  setLanguage: (language: string) => void;
  error: string | null;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const LanguageProvider: React.FC<LanguageContextProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [error, setError] = useState<string | null>(null);

  const handleSetLanguage = (newLanguage: string) => {
    try {
      if (!['en', 'cn'].includes(newLanguage)) {
        throw new Error(`Invalid language: ${newLanguage}`);
      }
      setLanguage(newLanguage);
      setError(null);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, error }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage };