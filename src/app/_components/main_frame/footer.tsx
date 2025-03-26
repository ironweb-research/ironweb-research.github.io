'use client'

import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import { usePathname } from 'next/navigation';

export function Footer({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <footer className={`bg-neutral-200 border-t border-neutral-200 dark:bg-zinc-800 ${className}`}>
      <Container>
        <div className="py-2 flex flex-col lg:flex-row items-center">
          <div className="hidden lg:block lg:w-1/2">
            <h3 className="text-2xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-4 lg:mb-0 lg:pr-4">
              Statically Generated with Next.js.
            </h3>
          </div>
          <div className="flex lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2 w-full">
            <a
              href="../"
              className="flex-1 mx-3 bg-black text-white  hover:bg-white hover:text-black border border-black dark:bg-white dark:text-black  dark:hover:bg-black dark:hover:text-white dark:border-white font-bold py-2 px-6 lg:px-4 duration-200 transition-colors mb-4 lg:mb-0 text-center w-full lg:w-auto"
            >
              {pathname === '/' ? "Home" : "< < Back"}
            </a>

            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              // className="flex-1 mx-3 font-bold hover:underline text-center w-full lg:w-auto"
              className="flex-1 mx-3 bg-black text-white  hover:bg-white hover:text-black border border-black dark:bg-white dark:text-black  dark:hover:bg-black dark:hover:text-white dark:border-white font-bold py-2 px-6 lg:px-4 duration-200 transition-colors mb-4 lg:mb-0 text-center w-full lg:w-auto"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;