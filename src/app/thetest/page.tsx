"use client"

import { useState } from 'react';
// import Image from "next/image";
import Container from "@/app/_components/container";
import { SectionSeparator } from "@/app/_components/main_frame/section-separator";
// import { IRONWEB_ONE_SVG } from "@/lib/constants"
import { ProfileLogoSVG, TickCircle, LogoAndBack, ResearchIcon, CommitmentIcon, HelpyouIcon, OnboardIcon, SizingIcon } from "@/app/_components/main_frame/svg_icon"
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

      <LogoAndBack height = {100} />
      <p>Create demo for sharing.</p>

      <div className="size-5 shrink-0"> 
          <TickCircle />
      </div>

      <div className="size-9 shrink-0"> 
          <TickCircle />
      </div>

      <div className="size-10 shrink-0"> 
          <TickCircle />
      </div>

      <div> 
          <SizingIcon /> DIV nothing
          <TickCircle />
      </div>
      
      <div className="size-300 shrink-0"> 
          <SizingIcon /> DIV 300
          <TickCircle />
      startline
      <LogoAndBack height = {100} />
      endline
      </div>

      <div className="size-96 justify-self-center"> 
          <SizingIcon /> DIV 96
          {/* <TickCircle /> */}
      </div>
why 96


<div className="size-80 justify-self-center"> 
          <SizingIcon /> DIV 80
          <TickCircle />
      </div>

      <div className="size-48 justify-self-center"> 
          <SizingIcon /> DIV 48
          <TickCircle />
      </div>

      
      <div className="size-40 justify-self-center"> 
          <SizingIcon /> DIV 40
          <TickCircle />
      </div>

      <div className="size-36 justify-self-center"> 
          <SizingIcon /> DIV 36
          <TickCircle />
      </div>

<br></br>
      
      </ul>
      {/* <VisionPage /> */}
        
    {/* <Image 
      className="svg-element"
      src={IRONWEB_ONE_SVG}
      alt={`Cover Image for`}
      width={80}
      height={80}
      /> */}
      startline
      <LogoAndBack height = {100} />
      endline
      <CommitmentIcon height = {20}/> height 20
      <HelpyouIcon height = {50} /> height 50
      <OnboardIcon height = {100} /> height 100
      <ResearchIcon height = {200} /> height 200
      <ResearchIcon /> height not call

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
