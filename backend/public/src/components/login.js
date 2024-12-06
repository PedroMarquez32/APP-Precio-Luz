import { validateLogin } from '../helpers/validation.js';
import { getUsersFromStorage } from '../helpers/storage.js';
import { switchToRegister } from '../main.js';

export function renderLogin() {
  const loginDiv = document.createElement('div');

  loginDiv.innerHTML = `
    <h2>LOGIN</h2>
    <input type="email" id="login-email" placeholder="Correo@example.com">
    <input type="password" id="login-password" placeholder="Password">
    <button id="login-button">Login</button>
    <p>¿No tienes cuenta? <a href="#" id="register-link">Regístrate aquí</a></p>
  `;

  loginDiv.querySelector('#login-button').addEventListener('click', () => {
    const email = loginDiv.querySelector('#login-email').value;
    const password = loginDiv.querySelector('#login-password').value;

    if (validateLogin(email, password, getUsersFromStorage())) {
      alert('¡Login exitoso!');
    } else {
      alert('Correo o contraseña incorrectos.');
    }
  });

  loginDiv.querySelector('#register-link').addEventListener('click', switchToRegister);

  return loginDiv;
}
