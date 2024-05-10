import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Tanay Jagnani",
  description: "I am a final year student completing his Bachelors of Engineering degree in Computer Science and Engineering from VTU, Bangalore. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Navbar className="px-8" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
