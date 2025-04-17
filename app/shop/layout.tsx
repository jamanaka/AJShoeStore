import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ShopNavbar from "@/components/shop/ShopNavbar";
import Footer from "@/components/Footer/Footer";
import ProtectedLayout from "@/components/ProtectedLayout";

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
  description: "Shop the latest trends in footwear...",
  verification: {
    google: "Y7XAcvHfkyxSQCl6JmQwAhXivRrVXoYpTW7mDL0sR68",
  },
  alternates: {
    canonical: "https://www.ajshoestore.com/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
        <ProtectedLayout>
          <ShopNavbar />
          <main className="min-h-[calc(100vh-160px)]">{children}</main>
          <Footer />
          <SpeedInsights />
        </ProtectedLayout>
      </body>
    </html>
  );
}
