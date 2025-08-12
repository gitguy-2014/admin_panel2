/**
 * Mock credentials for development/demo purposes
 * In a production environment, this would be replaced with proper authentication
 * Current credentials: admin@example.com / admin123
 */
export const MOCK_ADMIN_CREDENTIALS = {
  username: 'admin@example.com',
  password: 'admin123',
  displayName: 'Admin User'
};

/**
 * Validates user credentials against mock data
 * In production, this would make an API call to authenticate the user
 * @param {string} username - User's username/email
 * @param {string} password - User's password
 * @returns {boolean} - True if credentials are valid, false otherwise
 */
export const validateCredentials = (username, password) => {
  return username === MOCK_ADMIN_CREDENTIALS.username &&
         password === MOCK_ADMIN_CREDENTIALS.password;
};
