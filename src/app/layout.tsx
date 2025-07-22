import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tanay Jagnani",
  description:
    "Konnichiwa! I'm Tanay Jagnani. I am a software developer based out of India...",
  openGraph: {
    title: "Tanay Jagnani",
    description: "Software Developer",
    images: [
      "https://res.cloudinary.com/kakarot/image/upload/v1753208564/portfolio.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanay Jagnani",
    description: "Software Developer",
    images: [
      "https://res.cloudinary.com/kakarot/image/upload/v1753208564/portfolio.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "6984d24210bb413986653859cd28f325"}'
        ></script>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        ></script>
      </body>
    </html>
  );
}
