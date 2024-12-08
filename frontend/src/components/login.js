import { validateLogin } from '../helpers/validation';
import { getUsersFromStorage } from '../helpers/storage.js';


let logeado = false;

export function createLogin() {
  const loginDiv = document.createElement('div');
  loginDiv.id = "loginDiv";

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
      logeado = true;
    } else {
      alert('Correo o contraseña incorrectos.');
    }
  });

  return loginDiv;
}
