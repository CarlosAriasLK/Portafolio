import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/dictionaries/types";

// Fuente variable con eje de tamaño óptico (opsz): los titulares grandes usan el corte "display"
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope-face",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

type Params = Promise<{ lang: string }>;

// Solo /es y /en existen; cualquier otro segmento responde 404
export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  const { metadata } = await getDictionary(lang as Locale);

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: { title: metadata.title, description: metadata.description },
    icons: {
      icon: "/programacion2.png",
      shortcut: "/programacion2.png",
      apple: "/programacion2.png",
    },
  };
}

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Params }>) {
  const { lang } = await params;

  return (
    // Las variables de fuente van en <html> para que --font-sans (definida en :root) pueda resolverlas
    <html lang={lang} className={`${bricolage.variable} ${jetbrains.variable} ${instrument.variable} ${manrope.variable}`}>
      <body>
        {children}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}[data-word]{opacity:1!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
