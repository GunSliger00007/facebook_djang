// authContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    // For simplicity, setting authenticated to true directly.
    // In a real-world scenario, you'd perform a server authentication.
    setAuthenticated(true);
  };

  const logout = () => {
    // For simplicity, setting authenticated to false directly.
    // In a real-world scenario, you'd clear the authentication tokens and
    // potentially make a request to the server to invalidate the session.
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
