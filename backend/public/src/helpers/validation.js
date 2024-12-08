export function validateLogin(email, password, users) {
    return users.some(user => user.email === email && user.password === password);
  }
  