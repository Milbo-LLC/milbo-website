import type { Metadata } from "next";
import { Sora, JetBrains_Mono, Noto_Sans_Display } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
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
        className={`${sora.variable} ${mono.variable} ${notoSansDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
