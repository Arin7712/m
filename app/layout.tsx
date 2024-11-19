import type { Metadata } from "next";
import localFont from "next/font/local";
import {Iceland} from 'next/font/google'
import "./globals.css";


const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const iceland = Iceland({
  subsets: ['latin'],
  weight: ['400']
})

export const metadata: Metadata = {
  title: "Forex India",
  description: "Let the money raian forever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${iceland.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
