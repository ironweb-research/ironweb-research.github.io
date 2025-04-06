// LanguageSwitcher.tsx
import styles from './language.module.css';
import { useLanguage } from './languageContent';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'cn' : 'en');
  };

  return (
    <button
      onClick={handleLanguageChange}
      className={styles.languageSwitch}
    >
      {language === 'en' ? 'EN' : 'CN'}
    </button>
  );
};

export default LanguageSwitcher;