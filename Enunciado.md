## Precio de la Luz

**Título: Aplicación Web de Visualización de Precios de la Luz**

**Objetivo**: Desarrollar una aplicación web que permita consultar, filtrar y visualizar los precios de la luz en España. Se deben cargar los precios desde una API pública y mostrar los datos de manera interactiva a través de un selector de franja horaria, una tabla de precios y un gráfico.

#### Instrucciones Detalladas:

1. **Estructura del Proyecto**:
   - Utiliza Vite para gestionar y servir la aplicación.
   - Divide el código en componentes modulares, cada uno con su propia funcionalidad y estilo (HTML, CSS, y JavaScript).

2. **Requisitos Funcionales**:
   - **Carga de Precios de la Luz**:
     - Al cargar la página, el usuario debe ver un botón para **"Cargar Precios de la Luz"**.
     - Al hacer clic en el botón, la aplicación debe llamar a la **API de Red Eléctrica Española (REE)** para obtener los precios de la luz del mes de enero de 2024.
   - **Filtrado por Franja Horaria**:
     - Debe existir un desplegable (selector) con franjas horarias que se leerán de una variable `.env` del proyecto.
     - Las opciones de franjas horarias se deben cargar dinámicamente al iniciar la aplicación.
     - El usuario debe poder seleccionar una franja horaria y la aplicación debe filtrar los precios correspondientes a la selección.
   - **Visualización de Precios**:
     - Los precios filtrados deben mostrarse en una serie de tarjetas, cada una con la hora y el precio.
     - Debe existir un gráfico que represente los precios según la franja horaria seleccionada.
   - **Spinner de Carga**:
     - Al realizar una petición a la API, debe mostrarse un spinner que indique que los datos están cargando.

3. **Componentes**:
   - **Botón de Carga** (`LoadButton`): Un botón que permite al usuario cargar los precios de la luz.
   - **Selector de Franja Horaria** (`HourRangeSelect`): Un desplegable que permite seleccionar la franja horaria deseada.
   - **Spinner** (`Spinner`): Un elemento que se muestra mientras se cargan los datos de la API.
   - **Tarjeta de Precio** (`PriceCard`): Un componente que muestra la hora y el precio de la luz.

4. **Requisitos Técnicos**:
   - Utiliza **JavaScript ES Modules** para crear los componentes.
   - Asegúrate de seguir buenas prácticas como la separación de responsabilidades.
   - Utiliza **Chart.js** para representar gráficamente los datos de los precios.
   - Los estilos de cada componente deben mantenerse en archivos CSS independientes.

5. **Estilos**:
   - Estiliza las tarjetas de precios (`PriceCard`) para que tengan un borde y un sombreado suave.
   - El spinner debe estar centrado y ser visible mientras se carga la información.

6. **Configuración del Proyecto**:
   - Define las franjas horarias en un archivo `.env` usando la clave `VITE_HOUR_RANGES`:
     ```env
     VITE_HOUR_RANGES=0-6,6-12,12-18,18-24
     ```
   - Usa `import.meta.env` de Vite para leer la variable de entorno y cargar las opciones de franjas horarias.

7. **Entrega**:
   - El alumno debe entregar todo el código, incluidos los componentes y sus respectivos archivos de estilo.
   - La entrega debe incluir instrucciones sobre cómo ejecutar el proyecto usando Vite y cómo instalar las dependencias necesarias (`npm install`).

8. **Evaluación**:
   - Se evaluará la correcta **división en componentes**.
   - Se valorará la **correcta lectura de la API** y el **funcionamiento del filtro de franjas horarias**.
   - Se verificará la **usabilidad** y **funcionamiento del spinner**.
   - Se revisará la calidad del **código y los estilos** aplicados.



Tareas de Frontend

Persona 1: Páginas de Login y Registro (HTML/CSS/JS)
Página de Login:

Crear login.html con los campos:
Usuario (input).
Contraseña (input).
Botón de login.
Agregar un enlace o botón de "Registro" que redirija a la página de registro.
Página de Registro:

Crear register.html con los campos:
Usuario (input).
Contraseña (input).
Verificar contraseña (input).
Lógica en JavaScript:
Verificar que "Contraseña" y "Verificar contraseña" coincidan para habilitar el botón de "Registrar".
Estilizar ambas páginas con CSS básico (por ejemplo, esquema de colores, espaciado, etc.).

Persona 2: Página Principal e Estilo

Página Principal (Index):
Crear index.html con:
Barra de navegación:
Un marcador de posición para el logo.
Botones para "Luz" y "Tiempo".
Footer:
Un componente que muestre la información de los desarrolladores.
Usar un objeto en JavaScript con nombres de desarrolladores y enlaces a GitHub, renderizándolos dinámicamente en el footer.
Estilos:

Crear un archivo styles.css con:
Diseño básico para la barra de navegación, footer y contenido principal.
Estilos consistentes para los campos de entrada, botones y el tema general.
Agregar efectos de hover y transiciones para los elementos interactivos.


Tareas de Backend
Persona 3: Gestión de la Base de Datos y Endpoints de la API
Base de Datos SQLite3:
Crear una base de datos que gestione:
Registro de usuarios (tabla users con campos username y password encriptado).
Escribir scripts SQL para:
Agregar nuevos usuarios durante el registro.
Verificar credenciales durante el inicio de sesión.
Endpoints de la API:

Crear endpoints para:
Registrar un usuario: Validar los datos e insertarlos en la base de datos.
Login: Comprobar las credenciales del usuario en la base de datos y devolver éxito o error.
Obtener datos de luz: Crear una ruta que devuelva los datos horarios de luz y precios.
Obtener clima: Configurar un endpoint para llamar a la API de OpenWeatherMap y devolver los datos climáticos.

Persona 4: Lógica Backend e Integración con Fetch
Lógica de Autenticación:

Crear la lógica backend para el registro e inicio de sesión de usuarios.
Asegurarse de encriptar las contraseñas usando una librería como bcrypt.
Integración con el Frontend:

Configurar peticiones fetch en el frontend para:
Registro: Enviar datos del usuario al endpoint del backend.
Login: Autenticar y redirigir a index.html en caso de éxito.
Datos de luz y clima: Retornar los datos para que el frontend los renderice.
Servir Archivos Estáticos:

Usar un servidor web (por ejemplo, Flask, Express) para servir:
Archivos estáticos (index.html, login.html, register.html, CSS/JS).
Crear la lógica de rutas para manejar las llamadas a la API y la navegación entre páginas.
