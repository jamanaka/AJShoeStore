"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-full">
      Logout
    </button>
  );
}