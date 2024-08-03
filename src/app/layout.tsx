import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "~/components/navbar";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clonebnb",
  description: "An airbnb clone built with Next.js",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
