import type { Metadata } from "next";
import {
  Fraunces,
  Manrope,
  Noto_Sans_Armenian,
  Noto_Serif_Armenian,
} from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Manrope replaces Inter — slightly fuller letterforms give that "a little
// bolder" feel without literally cranking weight. Variable font, so all
// weights 200–800 are available without listing them.
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Armenian fallbacks — kick in automatically for HY characters via the
// font stack in globals.css.
const notoSansArm = Noto_Sans_Armenian({
  subsets: ["armenian"],
  variable: "--font-noto-sans-arm",
  display: "swap",
});

const notoSerifArm = Noto_Serif_Armenian({
  subsets: ["armenian"],
  variable: "--font-noto-serif-arm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soluna Travel — Ձեր հաջորդ ճանապարհորդությունը",
  description:
    "Երևանում հիմնված արտագնա ճանապարհորդական գործակալություն։ Չվերթեր, վիզաներ, հյուրանոցներ և մանրակրկիտ ընտրված փաթեթներ։",
  metadataBase: new URL("https://soluna.travel"),
  openGraph: {
    title: "Soluna Travel",
    description: "Արտագնա ճանապարհորդություն, ամբողջությամբ կազմակերպված։",
    type: "website",
    locale: "hy_AM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hy"
      className={`${fraunces.variable} ${manrope.variable} ${notoSansArm.variable} ${notoSerifArm.variable}`}
    >
      <body className="bg-white text-ink">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
