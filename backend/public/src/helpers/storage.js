export function getUsersFromStorage() {
    return JSON.parse(localStorage.getItem('users')) || [];
  }
  
  export function saveUserToStorage(user) {
    const users = getUsersFromStorage();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
  