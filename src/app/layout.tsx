import "@/styles/globals.css";
import cn from "classnames";
import { Inter } from "next/font/google";
import type { Viewport } from 'next'
import Alert from "@/app/_components/main_frame/alert";
import Footer from "@/app/_components/main_frame/footer";
import LangSwitchBanner from "@/app/_components/language_handler/language-switch-banner";
import { ThemeSwitcher } from "@/app/_components/main_frame/theme-switcher";
import { LanguageProvider } from "@/app/_components/language_handler/languageContent";
import { IRONWEB_ONE_SVG } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: 'black',
}

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Ironweb-Research ~ Future is Secure',
  description: 'Our Startup aims to integrate blockchain technology to secure networking systems.',
  openGraph: {
    title: 'Ironweb-Research ~ Future is Secure',
    description: 'Our Startup aims to integrate blockchain technology to secure networking systems.',
    images: [IRONWEB_ONE_SVG],
  },
  icons: {
    icon: [
      { url: "/assets/logo/favicon_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logo/favicon_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/logo/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/assets/logo/apple-touch-icon.png",
    shortcut: "/assets/logo/favicon.ico",
  },
  manifest: "/assets/logo/site.webmanifest",
  other: {
    "msapplication-TileColor": "black",
    "msapplication-config": "/assets/logo/browserconfig.xml",
    "mask-icon": "/assets/logo/safari-pinned-tab.svg",
    "alternate": "/feed.xml",
  }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(inter.className, "dark:bg-black dark:text-slate-400")}
      >
        <LanguageProvider>
        <Alert />
        <ThemeSwitcher />
        <div className="border-neutral-200 mt-20 min-h-screen background">
          {children}
        </div>
        <LangSwitchBanner className="fixed bottom-2 right-0 w-full z-20" />
        <Footer className="fixed bottom-0 left-0 w-full z-10" />
        </LanguageProvider>
        </body>
    </html>
  );
}
