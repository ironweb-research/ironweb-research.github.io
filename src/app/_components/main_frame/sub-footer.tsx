'use client'

import Container from "@/app/_components/container";
import { useLanguage } from "@/app/_components/language_handler/languageContent";
import LanguageSwitcher from "@/app/_components/language_handler/language-switcher";

export function SubFooter({ className }: { className?: string }) {
  const { language } = useLanguage();

  return (
    <footer className={`bg-transparent ${className}`}>
      <Container>
        <LanguageSwitcher />
      </Container>
    </footer>
  );
}

export default SubFooter;