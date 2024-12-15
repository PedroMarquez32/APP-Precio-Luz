import { createUserRequest } from '../helpers/services.js';
import { saveUserToStorage, getUsersFromStorage } from '../helpers/storage.js';
import { switchToLogin } from '../main.js';

const dataUrlUser = "http://localhost:3000/api/signin"

export function renderRegister() {
  const registerDiv = document.createElement('div');

  registerDiv.innerHTML = `
    <h2>REGISTER</h2>
    <input type="email" id="register-email" placeholder="Correo@example.com">
    <input type="password" id="register-password" placeholder="Password">
    <input type="password" id="register-confirm-password" placeholder="Confirm Password">
    <button id="register-button">Register</button>
    <p>¿Ya tienes cuenta? <a href="#" id="login-link">Inicia sesión aquí</a></p>
  `;

  registerDiv.querySelector('#register-button').addEventListener('click', async () => {
    const email = registerDiv.querySelector('#register-email').value;
    const password = registerDiv.querySelector('#register-password').value;
    const confirmPassword = registerDiv.querySelector('#register-confirm-password').value;

    const users = getUsersFromStorage();

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

  return registerDiv;
}
