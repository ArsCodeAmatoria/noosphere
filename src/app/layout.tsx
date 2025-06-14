import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Noosphere - Interdimensional AI",
  description: "An interdimensional AI system that uses Haskell, C, and quantum computing to simulate multidimensional consciousness.",
  keywords: ["AI", "Quantum Computing", "Haskell", "Consciousness", "Interdimensional"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
