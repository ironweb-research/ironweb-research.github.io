// LanguageSwitcher.tsx
import styles from './language.module.css';

interface LanguageSwitcherProps {
  language: string;
  onLanguageChange: () => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  language,
  onLanguageChange,
}) => {
  return (
    <button
      onClick={onLanguageChange}
      className={styles.languageSwitch}
    >
      {language === 'en' ? 'EN' : 'CN'}
    </button>
  );
};

export default LanguageSwitcher;