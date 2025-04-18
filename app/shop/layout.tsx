import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import ShopNavbar from "@/components/shop/ShopNavbar";
import Footer from "@/components/Footer/Footer";
import ProtectedLayout from "@/components/ProtectedLayout";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ShopSidebar } from "@/components/shop/sidebar/ShopSidebar";
import { cookies } from "next/headers"
 
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProtectedLayout>
          {/* <ShopNavbar /> */}
          <SidebarProvider defaultOpen={defaultOpen}>
            <ShopSidebar />
            <main className="w-screen">
              <div className="w-screen h-12 flex items-center fixed bg-white top-0">
              <SidebarTrigger />
              </div>
              {children}
              <Footer />
            </main>
          </SidebarProvider>{" "}
          <SpeedInsights />
        </ProtectedLayout>
      </body>
    </html>
  );
}
