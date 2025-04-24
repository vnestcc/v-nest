import type { Metadata } from "next";
import { Outfit, Space_Grotesk, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

// Primary font - clean, modern and professional
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

// Secondary font for headings and important UI elements - unique with tech personality
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

// Monospace font for code snippets or technical content
const splineSansMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VNEST - Startup Incubator",
  description: "VNEST Startup Incubator Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} ${splineSansMono.variable} antialiased w-screen overflow-x-hidden m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
