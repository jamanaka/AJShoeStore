"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  // Add other user properties as needed
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<User>; // Updated to match the implementation
  logout: () => Promise<void>; // Made async
  checkAuth: () => Promise<void>; // Exposed checkAuth
  getAuthHeaders: () => Promise<Record<string, string>>; // Made async
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://ajshoestoe-backend-api.onrender.com/api/auth/check-auth', {
        credentials: 'include'
      });

      const data = await response.json();

      if (data.success && data.user) {
        setUser(data.user);
        setIsAuthenticated(true);
        // Don't store token in sessionStorage - we're using HTTP-only cookies
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check error:", error);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
    
    // Add storage event listener to sync across tabs
    const syncAuth = (e: StorageEvent) => {
      if (e.key === "authState") { // Changed to single key
        checkAuth();
      }
    };
    
    window.addEventListener('storage', syncAuth);
    return () => window.removeEventListener('storage', syncAuth);
  }, [checkAuth]);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://ajshoestoe-backend-api.onrender.com/api/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
  
      // Update auth state with user data (token is in HTTP-only cookie)
      setUser(data.user);
      setIsAuthenticated(true);
      
      return data.user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      // Call backend logout endpoint
      await fetch('https://ajshoestoe-backend-api.onrender.com/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
    } catch (error) {
      console.error("Logout API error:", error);
    } finally {
      // Clear frontend state
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("authState");
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const getAuthHeaders = async () => {
    // For API calls that need authorization
    return {
      'Content-Type': 'application/json',
      // Cookies are automatically included via credentials: 'include'
    };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        logout,
        checkAuth,
        getAuthHeaders
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};