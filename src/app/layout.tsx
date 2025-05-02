import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Tanay Jagnani",
  description: "Hello, I'm a software engineer from India. I love building cool products. I have interned at 2 startups and love to work in a fast paced enviornment. I have worked with technologies like Javascript, Reactjs, Nextjs, Nodejs, PostgresSQL and many more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      </head>
      <body className={`${jetBrainsMono.className} bg-slate-900 text-white w-full`}>
        {children}
      </body>
    </html>
  );
}
