import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "~/components/navbar";
import { RegisterModal } from "~/components/modals/register-modal";
import { Toaster } from "sonner";
import { RootProvider } from "~/providers/root";

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
        <RootProvider>
          <RegisterModal />
          <Navbar />
          {children}
        </RootProvider>
        <Toaster />
      </body>
    </html>
  );
}
