import { Inter, JetBrains_Mono, Montserrat, Nanum_Gothic } from "next/font/google";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const uiFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ui",
});

const koFont = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-ko",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata = {
  title: ":)",
  description:
    "oolongeya portfolio - Offensive Security Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${bodyFont.className} ${displayFont.variable} ${uiFont.variable} ${koFont.variable} ${monoFont.variable} grain`}>
        {children}
      </body>
    </html>
  );
}
