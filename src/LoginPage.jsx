import React, { useState } from 'react';
import './LoginPage.css';
import { validateCredentials, MOCK_ADMIN_CREDENTIALS } from './mockCredentials';

/**
 * Login page component with authentication form
 * Handles user login with username/password validation
 * @param {Function} onLogin - Callback function called when login is successful
 */
const LoginPage = ({ onLogin }) => {
  // Form state management
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  // Controls password field visibility (show/hide password)
  const [showPassword, setShowPassword] = useState(false);
  // Controls error message display for invalid credentials
  const [showError, setShowError] = useState(false);

  /**
   * Handles changes to form inputs (text fields and checkbox)
   * Automatically clears error state when user starts typing
   */
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error message when user starts typing again
    if (showError) {
      setShowError(false);
    }
  };

  /**
   * Handles form submission and credential validation
   * Shows success/error states based on validation result
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCredentials(formData.username, formData.password)) {
      setShowError(false);
      console.log('Login successful', { user: MOCK_ADMIN_CREDENTIALS.displayName });
      onLogin();
    } else {
      setShowError(true);
    }
  };

  /**
   * Toggles password field visibility between text and password type
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="background-overlay">
        <div className="login-container">
          {/* Page header with welcome message */}
          <div className="header-section">
            <h1 className="welcome-title">Welcome.</h1>
            <p className="welcome-subtitle">Please log in to access the admin panel.</p>
          </div>

          <div className="form-container">
            {/* Login form with conditional error styling */}
            <form className={`login-form ${showError ? 'has-error' : ''}`} onSubmit={handleSubmit}>
              <div className="input-fields">
                {/* Username input field */}
                <div className="field-wrapper">
                  <label className="input-label">Username</label>
                  <div className="input-container">
                    <input
                      type="text"
                      name="username"
                      className="text-input"
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Password input field with visibility toggle */}
                <div className="field-wrapper">
                  <label className="input-label">Password</label>
                  <div className="input-container password-input">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className="text-input"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                    {/* Eye icon button to toggle password visibility */}
                    <button
                      type="button"
                      className="eye-toggle"
                      onClick={togglePasswordVisibility}
                      aria-label="Toggle password visibility"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.47188 15.2799C9.28188 15.2799 9.09187 15.2099 8.94187 15.0599C8.12187 14.2399 7.67188 13.1499 7.67188 11.9999C7.67188 9.60992 9.61187 7.66992 12.0019 7.66992C13.1519 7.66992 14.2419 8.11992 15.0619 8.93992C15.2019 9.07992 15.2819 9.26992 15.2819 9.46992C15.2819 9.66992 15.2019 9.85992 15.0619 9.99992L10.0019 15.0599C9.85187 15.2099 9.66188 15.2799 9.47188 15.2799ZM12.0019 9.16992C10.4419 9.16992 9.17188 10.4399 9.17188 11.9999C9.17188 12.4999 9.30187 12.9799 9.54187 13.3999L13.4019 9.53992C12.9819 9.29992 12.5019 9.16992 12.0019 9.16992Z" fill="#5E5E62"/>
                        <path d="M5.60375 18.51C5.43375 18.51 5.25375 18.45 5.11375 18.33C4.04375 17.42 3.08375 16.3 2.26375 15C1.20375 13.35 1.20375 10.66 2.26375 8.99998C4.70375 5.17998 8.25375 2.97998 12.0037 2.97998C14.2037 2.97998 16.3738 3.73998 18.2738 5.16998C18.6038 5.41998 18.6737 5.88998 18.4237 6.21998C18.1737 6.54998 17.7038 6.61998 17.3738 6.36998C15.7338 5.12998 13.8737 4.47998 12.0037 4.47998C8.77375 4.47998 5.68375 6.41998 3.52375 9.80998C2.77375 10.98 2.77375 13.02 3.52375 14.19C4.27375 15.36 5.13375 16.37 6.08375 17.19C6.39375 17.46 6.43375 17.93 6.16375 18.25C6.02375 18.42 5.81375 18.51 5.60375 18.51Z" fill="#5E5E62"/>
                        <path d="M12.0025 21.02C10.6725 21.02 9.3725 20.75 8.1225 20.22C7.7425 20.06 7.5625 19.62 7.7225 19.24C7.8825 18.86 8.3225 18.68 8.7025 18.84C9.7625 19.29 10.8725 19.52 11.9925 19.52C15.2225 19.52 18.3125 17.58 20.4725 14.19C21.2225 13.02 21.2225 10.98 20.4725 9.81C20.1625 9.32 19.8225 8.85 19.4625 8.41C19.2025 8.09 19.2525 7.62 19.5725 7.35C19.8925 7.09 20.3625 7.13 20.6325 7.46C21.0225 7.94 21.4025 8.46 21.7425 9C22.8025 10.65 22.8025 13.34 21.7425 15C19.3025 18.82 15.7525 21.02 12.0025 21.02Z" fill="#5E5E62"/>
                        <path d="M12.6915 16.2701C12.3415 16.2701 12.0215 16.0201 11.9515 15.6601C11.8715 15.2501 12.1415 14.8601 12.5515 14.7901C13.6515 14.5901 14.5715 13.6701 14.7715 12.5701C14.8515 12.1601 15.2415 11.9001 15.6515 11.9701C16.0615 12.0501 16.3315 12.4401 16.2515 12.8501C15.9315 14.5801 14.5515 15.9501 12.8315 16.2701C12.7815 16.2601 12.7415 16.2701 12.6915 16.2701Z" fill="#5E5E62"/>
                        <path d="M1.9975 22.75C1.8075 22.75 1.6175 22.68 1.4675 22.53C1.1775 22.24 1.1775 21.76 1.4675 21.47L8.9375 14C9.2275 13.71 9.7075 13.71 9.9975 14C10.2875 14.29 10.2875 14.77 9.9975 15.06L2.5275 22.53C2.3775 22.68 2.1875 22.75 1.9975 22.75Z" fill="#5E5E62"/>
                        <path d="M14.5287 10.2199C14.3387 10.2199 14.1488 10.1499 13.9988 9.99994C13.7088 9.70994 13.7088 9.22994 13.9988 8.93994L21.4687 1.46994C21.7587 1.17994 22.2388 1.17994 22.5288 1.46994C22.8188 1.75994 22.8188 2.23994 22.5288 2.52994L15.0588 9.99994C14.9088 10.1499 14.7187 10.2199 14.5287 10.2199Z" fill="#5E5E62"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Form actions: Remember Me checkbox and Login button */}
              <div className="form-actions">
                {/* Remember Me checkbox with custom styling */}
                <div className="remember-section">
                  <div className="checkbox-container">
                    <div className="checkbox-state-layer">
                      <div className={`checkbox-box ${formData.rememberMe ? 'checked' : ''}`}>
                        {/* Checkmark icon - only shown when checked */}
                        {formData.rememberMe && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="#0D0D0D"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    {/* Hidden native checkbox for accessibility */}
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      className="checkbox-hidden"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                    />
                  </div>
                  <label htmlFor="rememberMe" className="remember-text">Remember Me</label>
                </div>

                {/* Login submit button */}
                <button type="submit" className="submit-button">
                  <div className="button-state-layer">
                    <span className="button-text">Login</span>
                  </div>
                </button>
              </div>
            </form>

            {/* Error message display - only shown when credentials are invalid */}
            {showError && (
              <div className="error-section">
                {/* Error icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#BA7774"/>
                  <path d="M9.16937 15.5801C8.97937 15.5801 8.78938 15.5101 8.63938 15.3601C8.34938 15.0701 8.34938 14.5901 8.63938 14.3001L14.2994 8.64011C14.5894 8.35011 15.0694 8.35011 15.3594 8.64011C15.6494 8.93011 15.6494 9.41011 15.3594 9.70011L9.69937 15.3601C9.55937 15.5101 9.35937 15.5801 9.16937 15.5801Z" fill="#BA7774"/>
                  <path d="M14.8294 15.5801C14.6394 15.5801 14.4494 15.5101 14.2994 15.3601L8.63938 9.70011C8.34938 9.41011 8.34938 8.93011 8.63938 8.64011C8.92937 8.35011 9.40937 8.35011 9.69937 8.64011L15.3594 14.3001C15.6494 14.5901 15.6494 15.0701 15.3594 15.3601C15.2094 15.5101 15.0194 15.5801 14.8294 15.5801Z" fill="#BA7774"/>
                </svg>
                <span className="error-text">Incorrect username or password</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
