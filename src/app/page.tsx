'use client'

import { Intro } from "@/app/_components/main_frame/intro";
import { SectionSeparator } from "@/app/_components/section-separator";
import Background from "@/app/_components/our-background";
import Container from "@/app/_components/container";
import Services from "@/app/_components/services"

import LanguageSwitcher from '@/app/_components/handle_language/language-switcher';

export default function Index() {

  return (

      <main>
      <Container>
        <Intro />
        <Background />
        <SectionSeparator />
        <Services />
        <LanguageSwitcher />
      </Container>
    </main>

  );
}
