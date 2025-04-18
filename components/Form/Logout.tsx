"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_BASE_URL_PROD
        : process.env.NEXT_PUBLIC_API_BASE_URL_DEV;
    try {
      const res = await fetch(`${baseUrl}/api/auth/logout`, {
        method: "POST",
        credentials: "include", // Ensure cookies are sent
      });

      if (res.ok) {
        // Successfully logged out, redirect to login page or home
        router.push("/auth/login");
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
    >
      Logout
    </Button>
  );
}
