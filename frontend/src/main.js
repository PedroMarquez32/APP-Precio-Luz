import { renderLogin } from './components/login.js';
import { renderRegister } from './components/register.js';

function loadComponent(component) {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Limpia el contenido previo
  app.appendChild(component);
}

// Carga inicial
loadComponent(renderLogin());

// Exportamos funciones para cambiar entre componentes
export function switchToLogin() {
  loadComponent(renderLogin());
}

export function switchToRegister() {
  loadComponent(renderRegister());
}
