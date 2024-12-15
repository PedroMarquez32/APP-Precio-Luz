import { validateLogin } from '../helpers/validation.js';
import { getUsersFromStorage } from '../helpers/storage.js';
<<<<<<< HEAD

let logeado = false;

export function createLogin() {
  const loginDiv = document.createElement('div');
  loginDiv.id = "loginDiv";
=======
import { switchToRegister } from '../main.js';
import { loginUserRequest } from '../helpers/services.js';

const dataUrlUser = "http://localhost:3000/api/login"

export function renderLogin() {
  const loginDiv = document.createElement('div');
>>>>>>> 535e167bb86673c4e52ae96b26f25e650d140ddb

  loginDiv.innerHTML = `
    <h2>LOGIN</h2>
    <input type="email" id="login-email" placeholder="Correo@example.com">
    <input type="password" id="login-password" placeholder="Password">
    <button id="login-button">Login</button>
    <p>¿No tienes cuenta? <a href="#" id="register-link">Regístrate aquí</a></p>
  `;

<<<<<<< HEAD
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

=======
  loginDiv.querySelector('#login-button').addEventListener('click', async () => {
    const email = loginDiv.querySelector('#login-email').value;
    const password = loginDiv.querySelector('#login-password').value;

    await loginUserRequest(dataUrlUser, email, password)

  });

  loginDiv.querySelector('#register-link').addEventListener('click', switchToRegister);

>>>>>>> 535e167bb86673c4e52ae96b26f25e650d140ddb
  return loginDiv;
}
