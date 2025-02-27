"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

  // Check if the user is logged in on initial load
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userData = sessionStorage.getItem("user");

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData); // Parse user data
        if (parsedUser && typeof parsedUser === "object") {
          setIsAuthenticated(true); // Restore authentication state
          setUser(parsedUser); // Restore user data
        } else {
          console.error("Invalid user data in sessionStorage");
          sessionStorage.removeItem("user"); // Remove invalid data
        }
      } catch (error) {
        console.error("Failed to parse user data:", error);
        sessionStorage.removeItem("user"); // Remove invalid data
      }
    }
  }, []);

  // Login function
  const login = (token, userData) => {
    try {
      sessionStorage.setItem("token", token); // Store the token in sessionStorage
      sessionStorage.setItem("user", JSON.stringify(userData)); // Store user data in sessionStorage
      setUser(userData); // Set user data
      setIsAuthenticated(true); // Set authenticated to true
    } catch (error) {
      console.error("Failed to save user data to sessionStorage:", error);
    }
  };

  // Logout function
  const logout = () => {
    try {
      sessionStorage.removeItem("token"); // Remove the token
      sessionStorage.removeItem("user"); // Remove user data
      setUser(null); // Clear user data
      setIsAuthenticated(false); // Set authenticated to false
    } catch (error) {
      console.error("Failed to clear sessionStorage:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);