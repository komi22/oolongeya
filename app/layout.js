import localFont from "next/font/local";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const bodyFont = localFont({
  src: [
    { path: "./fonts/Pretendard-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Pretendard-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Pretendard-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Pretendard-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-ui",
});

const displayFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
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
      <body className={`${bodyFont.className} ${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} grain`}>
        {children}
      </body>
    </html>
  );
}
