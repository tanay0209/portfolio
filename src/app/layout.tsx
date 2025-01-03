import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Tanay Jagnani",
  description: "I am a 2024 Computer Science grauduate with expertise in Javascript, Reactjs, Nextjs and Flutter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      </head>
      <body className={`${jetBrainsMono.className} bg-slate-800 text-white`}>
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
