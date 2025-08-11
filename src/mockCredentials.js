export const MOCK_ADMIN_CREDENTIALS = {
  username: 'admin@example.com',
  password: 'admin123',
  displayName: 'Admin User'
};

export const validateCredentials = (username, password) => {
  return username === MOCK_ADMIN_CREDENTIALS.username && 
         password === MOCK_ADMIN_CREDENTIALS.password;
};
