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
      setIsAuthenticated(true); // Restore authentication state
      setUser(JSON.parse(userData)); // Restore user data
    }
  }, []);

  // Login function
  const login = (token, userData) => {
    sessionStorage.setItem("token", token); // Store the token in sessionStorage
    sessionStorage.setItem("user", JSON.stringify(userData)); // Store user data in sessionStorage
    setUser(userData); // Set user data
    setIsAuthenticated(true); // Set authenticated to true
  };

  // Logout function
  const logout = () => {
    sessionStorage.removeItem("token"); // Remove the token
    sessionStorage.removeItem("user"); // Remove user data
    setUser(null); // Clear user data
    setIsAuthenticated(false); // Set authenticated to false
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);