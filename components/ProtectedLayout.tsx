"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_BASE_URL_PROD
        : process.env.NEXT_PUBLIC_API_BASE_URL_DEV;
    const checkAuth = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/auth/check-auth`, {
          credentials: "include",
        });
        const data = await res.json();

        if (!data.login) {
          router.push("/auth/login");
        } else {
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        router.push("/auth/login");
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-6">
        {/* SVG Spinner */}
        <div className="w-20 h-20 mb-6 relative">
          <svg className="animate-spin-slow" viewBox="0 0 64 64">
            <circle
              className="text-gray-200 dark:text-gray-700"
              cx="32"
              cy="32"
              r="28"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
            />
            <path
              className="text-blue-500 dark:text-blue-400"
              d="M32,4 a28,28 0 0,1 28,28"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          
          {/* Optional center logo - replace with your logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Loading text with fade-in animation */}
        <div className="text-center space-y-2 animate-fade-in">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Securing Your Session
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md">
            We&apos;re verifying your credentials for a secure experience
          </p>
        </div>

        {/* Optional animated dots */}
        <div className="mt-8 flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}