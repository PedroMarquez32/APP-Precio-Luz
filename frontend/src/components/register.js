<<<<<<< HEAD
<<<<<<< HEAD
=======
import { createUserRequest } from '../helpers/services.js';
>>>>>>> cef8feae1ed043a03d5a6321b7d7a1b1036b6ab2
import { saveUserToStorage, getUsersFromStorage } from '../helpers/storage.js';
import { switchToLogin } from '../main.js';

const dataUrlUser = "http://localhost:3000/api/signin"

<<<<<<< HEAD
export function createRegister() {
=======
import { createUserRequest } from '../helpers/services.js';
import { saveUserToStorage, getUsersFromStorage } from '../helpers/storage.js';
import { switchToLogin } from '../main.js';

const dataUrlUser = "http://localhost:3000/api/signin"

export function renderRegister() {
>>>>>>> 535e167bb86673c4e52ae96b26f25e650d140ddb
=======
export function renderRegister() {
>>>>>>> cef8feae1ed043a03d5a6321b7d7a1b1036b6ab2
  const registerDiv = document.createElement('div');

  registerDiv.innerHTML = `
    <h2>REGISTER</h2>
    <input type="email" id="register-email" placeholder="Correo@example.com">
    <input type="password" id="register-password" placeholder="Password">
    <input type="password" id="register-confirm-password" placeholder="Confirm Password">
    <button id="register-button">Register</button>
    <p>¿Ya tienes cuenta? <a href="#" id="login-link">Inicia sesión aquí</a></p>
  `;

<<<<<<< HEAD
<<<<<<< HEAD
  registerDiv.querySelector('#register-button').addEventListener('click', () => {
=======
  registerDiv.querySelector('#register-button').addEventListener('click', async () => {
>>>>>>> 535e167bb86673c4e52ae96b26f25e650d140ddb
=======
  registerDiv.querySelector('#register-button').addEventListener('click', async () => {
>>>>>>> cef8feae1ed043a03d5a6321b7d7a1b1036b6ab2
    const email = registerDiv.querySelector('#register-email').value;
    const password = registerDiv.querySelector('#register-password').value;
    const confirmPassword = registerDiv.querySelector('#register-confirm-password').value;

    const users = getUsersFromStorage();

<<<<<<< HEAD
<<<<<<< HEAD
    if (users.some(user => user.email === email)) {
      alert('El correo ya está registrado.');
    } else if (password !== confirmPassword) {
=======
    if (password !== confirmPassword) {
>>>>>>> cef8feae1ed043a03d5a6321b7d7a1b1036b6ab2
      alert('Las contraseñas no coinciden.');
    } else {

      if(await createUserRequest(dataUrlUser, email, password)){
        saveUserToStorage({ email, password });
        alert('¡Registro exitoso!');
        switchToLogin();
      }else{
        alert('El correo ya está registrado.');
      }

    }
  });

<<<<<<< HEAD
=======
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
    } else {

      if(await createUserRequest(dataUrlUser, email, password)){
        saveUserToStorage({ email, password });
        alert('¡Registro exitoso!');
        switchToLogin();
      }else{
        alert('El correo ya está registrado.');
      }

    }
  });

  registerDiv.querySelector('#login-link').addEventListener('click', switchToLogin);

>>>>>>> 535e167bb86673c4e52ae96b26f25e650d140ddb
=======
  registerDiv.querySelector('#login-link').addEventListener('click', switchToLogin);

>>>>>>> cef8feae1ed043a03d5a6321b7d7a1b1036b6ab2
  return registerDiv;
}
