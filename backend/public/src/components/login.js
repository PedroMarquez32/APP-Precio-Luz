import { validateLogin } from '../helpers/validation.js';
import { getUsersFromStorage } from '../helpers/storage.js';
import { switchToRegister } from '../main.js';
import { loginUserRequest } from '../helpers/services.js';

const dataUrlUser = "http://localhost:3000/users/login"

export function renderLogin() {
  const loginDiv = document.createElement('div');

  loginDiv.innerHTML = `
    <h2>LOGIN</h2>
    <input type="email" id="login-email" placeholder="Correo@example.com">
    <input type="password" id="login-password" placeholder="Password">
    <button id="login-button">Login</button>
    <p>¿No tienes cuenta? <a href="#" id="register-link">Regístrate aquí</a></p>
  `;

  loginDiv.querySelector('#login-button').addEventListener('click', async () => {
    const email = loginDiv.querySelector('#login-email').value;
    const password = loginDiv.querySelector('#login-password').value;

    await loginUserRequest(dataUrlUser, email, password)

  });

  loginDiv.querySelector('#register-link').addEventListener('click', switchToRegister);

  return loginDiv;
}
