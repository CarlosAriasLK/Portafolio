import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Arias | Desarrollador",
  description: "Portafolio de Carlos Arias - Desarrollador Full Stack especializado en React, Next.js, TypeScript y Node.js",
  icons: {
    icon: "/programacion2.png",
    shortcut: "/programacion2.png",
    apple: "/programacion2.png",
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <>
      <html lang="es" className="scroll-smooth">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          
          {children}
          <Toaster />

        </body>
      </html>
    </>
  );
}
