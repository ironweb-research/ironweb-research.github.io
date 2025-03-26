"use client"

import { useState } from 'react';
// import Image from "next/image";
import Container from "@/app/_components/container";
import { SectionSeparator } from "@/app/_components/section-separator";
// import { IRONWEB_ONE_SVG } from "@/lib/constants"
import { ProfileLogoSVG, LogoAndBack } from "@/app/_components/main_frame/svg_icon"
// import VisionPage  from "@/app/_components/vision" 


export default function TestPage() {
  const [language, setLanguage] = useState('en');
  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'cn' : 'en');
  };
  return (
    <main>
      {/* <Container> */}
      <h1 className="title">
        Welcome to <a href="https://ironweb-research.github.io/">Ironweb!</a>
      </h1>
      {/* <LogoAndBack height = {100}/> */}

      <p className="description">Build faster with our powerful Next.js starter! Packed with essential tools like state management, React Query, I18n, CI/CD, and customizable UI components, it's everything you need to kickstart scalable, high-performance projects effortlessly.</p>
      <ul className="">

      {/* <LogoAndBack height = {50}/> */}
      <p>Create demo for sharing.</p>
      </ul>
      {/* <VisionPage /> */}
        
    {/* <Image 
      className="svg-element"
      src={IRONWEB_ONE_SVG}
      alt={`Cover Image for`}
      width={80}
      height={80}
    /> */}
      <SectionSeparator />

      <button
          suppressHydrationWarning
          onClick={handleLanguageChange}
          style={{
            position: 'fixed',
            bottom: 80,
            right: 20,
            zIndex: 1,
            backgroundColor: 'red', 
            border: '1px solid black',
          }}
          >
          {language === 'en' ? 'EN' : 'CN'}
        </button>



      {/* <ProfileLogoSVG /> */}
    {/* </Container> */}
    </main>
  );
}
