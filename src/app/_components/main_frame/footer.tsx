'use client'

import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import { usePathname } from 'next/navigation';
import { useLanguage } from "@/app/_components/language_handler/languageContent";

export function Footer({ className }: { className?: string }) {
  const pathname = usePathname();
  const { language } = useLanguage();

  const FooterButtons = language === 'en' ? 
  {
    "home": "Home",
    "back": "< < Back",
    "contact": "Contact"
  }:{
      "home": "首页",
      "back": "< < 返回",
      "contact": "联系"
    };

  return (
    <footer className={`bg-neutral-200 dark:bg-zinc-800 ${className}`}>
      <Container>
        <div className="py-0.5 flex flex-col lg:flex-row items-center">
          <div className="hidden lg:block lg:w-1/2">
            <a className="text-dynamic-fontsize-5 tracking-tighter leading-tight text-center lg:text-left mb-4 lg:mb-0 lg:pr-4">
              Statically Generated with Next.js.
            </a>
          </div>
          <div className="text-dynamic-fontsize-4 flex lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2 w-full">
            <a
              href="../"
              className="flex-1 mx-3 bg-black text-white hover:bg-white hover:text-black border rounded-md border-black dark:bg-white dark:text-black  dark:hover:bg-black dark:hover:text-white dark:border-white px-6 lg:px-4 duration-200 transition-colors lg:mb-0 text-center w-full lg:w-auto"
            >
              {pathname === '/' ? `${FooterButtons.home}` : `${FooterButtons.back}`}
            </a>

            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              // className="flex-1 mx-3 hover:underline text-center w-full lg:w-auto"
              className="flex-1 mx-3 bg-black text-white hover:bg-white hover:text-black border rounded-md border-black dark:bg-white dark:text-black  dark:hover:bg-black dark:hover:text-white dark:border-white px-6 lg:px-4 duration-200 transition-colors lg:mb-0 text-center w-full lg:w-auto"
            >
              {FooterButtons.contact}
            </a>            
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;