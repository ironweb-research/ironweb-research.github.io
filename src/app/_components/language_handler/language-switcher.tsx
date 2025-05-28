'use client';
import styles from './language.module.css';
import { useLanguage } from './languageContent';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'cn' : 'en');
  };
  return (
    <button
      onClick={handleLanguageChange}
      className={styles.languageSwitch}
      aria-label="Language_Switch"
    >
      {language === 'en' ? '中':'EN'}
    </button>
  );
};

export default LanguageSwitcher;