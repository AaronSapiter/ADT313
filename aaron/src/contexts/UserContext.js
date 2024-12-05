import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the UserContext
const UserContext = createContext(null);

// UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  // Load user from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('accessToken');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (storedToken) {
      setAccessToken(storedToken);
    }
  }, []);

  // Login method
  const login = (userData, token) => {
    setUser(userData);
    setAccessToken(token);
    
    // Persist user and token in localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('accessToken', token);
  };

  // Logout method
  const logout = () => {
    setUser(null);
    setAccessToken(null);
    
    // Clear localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
  };

  // Update user method
  const updateUser = (updatedUserData) => {
    setUser(prevUser => ({
      ...prevUser,
      ...updatedUserData
    }));
    
    // Update localStorage
    localStorage.setItem('user', JSON.stringify({
      ...user,
      ...updatedUserData
    }));
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      accessToken, 
      login, 
      logout, 
      updateUser 
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  
  if (context === null) {
    throw new Error('useUser must be used within a UserProvider');
  }
  
  return context;
};
