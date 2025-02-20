import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AJShoeStore",
  description:
    "Shop the latest trends in footwear at AJShoeStore. Find stylish, high-quality shoes for every occasion, from casual to formal. With great prices!",
  viewport: "width=device-width, initial-scale=1",
  other: {
    "google-site-verification": "Y7XAcvHfkyxSQCl6JmQwAhXivRrVXoYpTW7mDL0sR68",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
