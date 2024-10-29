import { FOOTER_IMAGE_URL } from "./lib/constants";
export const metadata = {
  title: "Ironweb-Research ~ Future is Secure",
  description: "Our Startup aims to integrate blockchain technology to secure networking systems.",
  icons: {
    // icon: "/favicon.ico",
    images: [FOOTER_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
