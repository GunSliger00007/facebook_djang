import React, { useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import Login from './components/login/login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Additional logic you want to perform on login
  };

  return (
    <>
      {isLoggedIn ? (
        <AppRoutes />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
