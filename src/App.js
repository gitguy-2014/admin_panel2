import React, { useState } from 'react';
import LoginPage from './LoginPage';
import AdminDashboard from './AdminDashboard';

/**
 * Main application component that handles authentication flow
 * Conditionally renders either the login page or admin dashboard
 * based on the user's authentication status
 */
function App() {
  // Track user authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handler for successful login - switches to dashboard view
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handler for logout - returns to login view
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {/* Conditional rendering based on authentication state */}
      {isLoggedIn ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
