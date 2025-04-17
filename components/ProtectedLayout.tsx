"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // 👈 track auth check

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("https://ajshoestoe-backend-api.onrender.com/api/auth/check-auth", {
          credentials: "include",
        });
        const data = await res.json();

        if (!data.login) {
          router.push("/auth/login");
        } else {
          setIsLoading(false); // 👈 only allow rendering when authenticated
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        router.push("/auth/login");
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    // 🔒 Prevent flashing the protected content
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Checking authentication...</p>
      </div>
    );
  }

  return <>{children}</>;
}
