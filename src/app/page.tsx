'use client'

import { useState } from 'react';
import { Intro } from "@/app/_components/main_frame/intro";
import { SectionSeparator } from "@/app/_components/section-separator";
import Background from "@/app/_components/our-background";
import Container from "@/app/_components/container";
import Services from "@/app/_components/services"
import LanguageSwitcher from '@/app/_components/main_frame/language-switcher';

export default function Index() {
  const [language, setLanguage] = useState('en');
  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'cn' : 'en');
  };

  return (
    <main>
      <Container>
        <Intro />
        <Background language={language}/>
        <SectionSeparator />
        <Services language={language}/>
        <LanguageSwitcher
          language={language}
          onLanguageChange={handleLanguageChange}
        />
      </Container>
    </main>
  );
}
