"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function ProtectedRouteIfLogin({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);

  const protectedPaths = ["/", "/auth/login", "/auth/register", "/contact-us", "/about-us"];

  useEffect(() => {
    // Skip auth check if we've already done it
    if (authChecked) {
      setIsLoading(false);
      return;
    }

    const checkAuth = async () => {
      try {
        const baseUrl = process.env.NODE_ENV === "production"
          ? process.env.NEXT_PUBLIC_API_BASE_URL_PROD
          : process.env.NEXT_PUBLIC_API_BASE_URL_DEV;

        const res = await fetch(`${baseUrl}/api/auth/check-auth`, {
          credentials: "include",
          cache: 'no-store' // Ensure fresh check
        });
        
        const data = await res.json();

        if (data.login && protectedPaths.includes(pathname ?? "")) {
          router.push("/shop");
        } else {
          setAuthChecked(true); // Mark auth as checked
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setAuthChecked(true); // Mark auth as checked even on error
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router, pathname, authChecked]);

  // Store auth state in sessionStorage to persist across refreshes
  useEffect(() => {
    if (!authChecked) return;
    
    const handler = () => {
      sessionStorage.setItem('authChecked', 'true');
    };
    
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [authChecked]);

  // Check sessionStorage on initial load
  useEffect(() => {
    if (sessionStorage.getItem('authChecked') === 'true') {
      setAuthChecked(true);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-6">
        {/* Your beautiful spinner */}
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
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
          </div>
        </div>
        <div className="text-center space-y-2 animate-fade-in">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Securing Your Session
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md">
            We&apos;re verifying your credentials for a secure experience
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}