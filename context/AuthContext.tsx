// "use client";

// import { createContext, useContext, useState, useEffect } from "react";

// interface User {
//   id: string;
//   email: string;
//   name: string;
// }

// interface AuthContextType {
//   user: User | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   checkAuth: () => Promise<void>;
//   login: (email: string, password: string) => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const checkAuth = async () => {
//     setIsLoading(true);
//     try {
//       const res = await fetch("/api/auth/session");
//       if (!res.ok) {
//         throw new Error(`Failed to fetch session: ${res.statusText}`);
//       }
//       const data: { isAuthenticated: boolean; user: User | null } = await res.json();
//       setIsAuthenticated(data.isAuthenticated);
//       setUser(data.user || null);
//     } catch (error) {
//       console.error("Auth check failed:", error);
//       setIsAuthenticated(false);
//       setUser(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const login = async (email: string, password: string) => {
//     setIsLoading(true);
//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       if (!res.ok) {
//         throw new Error(`Login failed: ${res.statusText}`);
//       }
//       const data: { isAuthenticated: boolean; user: User | null } = await res.json();
//       setIsAuthenticated(data.isAuthenticated);
//       setUser(data.user || null);
//     } catch (error) {
//       console.error("Login failed:", error);
//       setIsAuthenticated(false);
//       setUser(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     checkAuth();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated, isLoading, checkAuth, login }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Export the useAuth hook for easier access
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
