import { saveUserToStorage, getUsersFromStorage } from '../helpers/storage.js';


export function createRegister() {
  const registerDiv = document.createElement('div');

  registerDiv.innerHTML = `
    <h2>REGISTER</h2>
    <input type="email" id="register-email" placeholder="Correo@example.com">
    <input type="password" id="register-password" placeholder="Password">
    <input type="password" id="register-confirm-password" placeholder="Confirm Password">
    <button id="register-button">Register</button>
    <p>¿Ya tienes cuenta? <a href="#" id="login-link">Inicia sesión aquí</a></p>
  `;

  registerDiv.querySelector('#register-button').addEventListener('click', () => {
    const email = registerDiv.querySelector('#register-email').value;
    const password = registerDiv.querySelector('#register-password').value;
    const confirmPassword = registerDiv.querySelector('#register-confirm-password').value;

    const users = getUsersFromStorage();

    if (users.some(user => user.email === email)) {
      alert('El correo ya está registrado.');
    } else if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
    } else {
      saveUserToStorage({ email, password });
      alert('¡Registro exitoso!');
      switchToLogin();
    }
  });

  return registerDiv;
}
