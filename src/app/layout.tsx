import type { Metadata } from "next";
import {
  Fira_Sans,
  JetBrains_Mono,
  Noto_Sans_Display,
} from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const notoSansDisplay = Noto_Sans_Display({
  variable: "--font-noto-sans-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Milbo — Software Studio",
  description: "We design and build thoughtful software, fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.variable} ${mono.variable} ${notoSansDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
