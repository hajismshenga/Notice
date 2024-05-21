// src/services/authService.js
const users = [
  { username: 'admin', password: 'admin123', role: 'Admin' },
  { username: 'student1', password: 'password123', role: 'Student' },
  // Add more mock users as needed
];

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      resolve(user);
    } else {
      reject('Invalid username or password');
    }
  });
};
