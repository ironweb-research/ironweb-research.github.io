'use client'

import { Intro } from "@/app/_components/main_frame/intro";
import { SectionSeparator } from "@/app/_components/main_frame/section-separator";
import Background from "@/app/_components/our-background";
import Container from "@/app/_components/container";
import Services from "@/app/_components/services"

import { useLanguage } from "./_components/language_handler/languageContent";
import LanguageSwitcher from '@/app/_components/language_handler/language-switcher';

export default function Index() {

  return (
    <main>
      <Container>
        <Intro />
        <Background />
        <SectionSeparator />
        <Services />
      </Container>
    </main>

  );
}
