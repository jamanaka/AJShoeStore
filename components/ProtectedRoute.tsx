// "use client";

// import { usePathname } from "next/navigation";
// import { useAuth } from "@/context/AuthContext";
// import { useEffect } from "react";
// // import LoadingSpinner from "@/components/ui/LoadingSpinner";

// export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
//   const { isAuthenticated, isLoading } = useAuth();
//   const pathname = usePathname();

//   useEffect(() => {
//     if (!isLoading && !isAuthenticated && !(pathname ?? "").startsWith("/auth")) {
//       sessionStorage.setItem("returnUrl", pathname ?? "");
//       window.location.href = "/login"; // Use full redirect
//     }
//   }, [isAuthenticated, isLoading, pathname]);

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         {/* <LoadingSpinner /> Uncomment this when you have a loading component */}
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return isAuthenticated ? children : null;
// }
