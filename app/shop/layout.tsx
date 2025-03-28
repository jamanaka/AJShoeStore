import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AuthProvider } from "@/context/AuthContext";
import ShopNavbar from "@/components/shop/ShopNavbar";
import Footer from "@/components/Footer/Footer";
// import ProtectedRoute from "@/components/ProtectedRoute";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Remove viewport from metadata
export const metadata: Metadata = {
  title: "AJShoeStore",
  description:
    "Shop the latest trends in footwear at AJShoeStore. Find stylish, high-quality shoes for every occasion, from casual to formal. With great prices!",
  verification: {
    google: "Y7XAcvHfkyxSQCl6JmQwAhXivRrVXoYpTW7mDL0sR68",
  },
  alternates: {
    canonical: "https://www.ajshoestore.com/",
  },
};

// ✅ Define viewport separately
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
        {" "}
        {/* <ProtectedRoute> */}
          <AuthProvider>
            <ShopNavbar />
            {children}
            <Footer />
            <SpeedInsights />
          </AuthProvider>
        {/* </ProtectedRoute> */}
      </body>
    </html>
  );
}
