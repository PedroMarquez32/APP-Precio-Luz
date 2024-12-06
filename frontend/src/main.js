import { cardPrices } from "./components/cardPrices/cardPrices.js";
import { createFooter } from "./components/footer/footer.js";
import { createdGraph } from "./components/grafico/chart.js";
import { createdHoursRanges } from "./components/hoursRangeSelect/hoursRangeSelect.js";
import { createLoadButton } from "./components/loadButton/loadButton.js";
import { createDiv } from "./components/navIndex/divIndex.js";
import { createSpinner, hideSpinner, showSpinner } from "./components/spinner/spinner.js";
import { getDataPrice } from "./helpers/getDataPrices.js";

import { createLogin} from './components/login.js';
import { createRegister } from './components/register.js';
// -------- Delcaracion de variables ------
const urlData = import.meta.env.VITE_HOUR_PRICES;
let showFooter = true;
let starHour = "";
let endHour = "";
let dataPrices = [];
const githubs = 
{ 
    Francisco_Jose_Salmeron_Puig: "_Salm3ron_",  
    Luis_Maldonado_Hernandez: "Kuisyy", 
    Damaso: "DamasoGE",
    Pedro_Javier_Marquez_Lizana: "PedroMarquez32"
};

// --------- Delcaracion de funciones -----

// REGISTER Y LOGIN:
function renderLogin(){
    const app = document.getElementById("app");
    app.innerHTML = "";
    const login = createLogin();
    app.appendChild(login);

    document.getElementById("register-link").addEventListener("click",renderRegister);
};

function renderRegister(){
    app.innerHTML = "";
    const register = createRegister();
    app.appendChild(register);

    document.getElementById("login-link").addEventListener("click",renderLogin);
};


// Pagina luz y tiempo por defecto:
function renderPaginaLuzYTiempo() {
    
    // LOGO QUE HAY QUE PONER
    const divIndex = createDiv();
    app.appendChild(divIndex);

    renderFooter();

    document.getElementById("luz-btn").addEventListener('click',renderPaginaLuz);
    document.getElementById("time-btn").addEventListener('click',renderPaginaTime);
};

function renderFooter(){
    const footerIndex = createFooter(githubs);
    app.appendChild(footerIndex);
}


// PARTE LUZ
const hourRangeValue = (event) => {
    const selectedValue = event.target.value;  // Obtener el valor seleccionado del select o rango de horas
    [starHour, endHour] = selectedValue.split("-");
};

const handleClick = async() => {
    showFooter = false;
    showSpinner(); // muestra el spinner de carga
    const data = await getDataPrice(urlData); //cogemos la data seleccionada
    dataPrices = data;
    const divPrice = cardPrices(dataPrices,starHour,endHour);
    const graph = createdGraph(starHour,endHour,await data.entries().next().value[1]);
    app.textContent = "";
    renderPaginaLuz();
    showFooter = true;
    app.appendChild(await divPrice);
    app.appendChild(graph);
    renderFooter();
    hideSpinner(); // ocultamos el spinner de cargar    
};

// Renderizar la luz si se pulsa el boton de la luz:
function renderPaginaLuz() {
   starHour = "00:00";
    endHour = "06:00";

    app.textContent = "";
    const divIndex = createDiv();
    app.appendChild(divIndex);

    const spinner = createSpinner(); 
    
    const loadPricesBtn = createLoadButton();
    
    const selectHourRanges = createdHoursRanges();
        
    app.append(spinner,loadPricesBtn,selectHourRanges);

    if(showFooter){
        renderFooter();
    }

    selectHourRanges.addEventListener("change",hourRangeValue); 
    loadPricesBtn.addEventListener('click', handleClick); // para funcion que necesita parametros metodo, ()=>funcion(parametros); 
    document.getElementById("luz-btn").addEventListener('click',renderPaginaLuz);
    document.getElementById("time-btn").addEventListener('click',renderPaginaTime);

};

// PARTE TIEMPO:
function renderPaginaTime() {
    
 
    app.textContent = "";
    const divIndex = createDiv();
    app.appendChild(divIndex);
 
    const spinner = createSpinner(); 
    
    app.appendChild(spinner);
 
    if(showFooter){
        renderFooter();
    }
    
    document.getElementById("luz-btn").addEventListener('click',renderPaginaLuz);
    document.getElementById("time-btn").addEventListener('click',renderPaginaTime);
 };


// Ejecucion de codigo:
renderLogin();

// SE GUARDA EN EL LOCAL STORAGE UNA VARIABLE BOOLEANA PARA SABER SI ESTA LOGEADO
if(logeado){
    const logeado = localStorage.getItem();
    app.innerHTML = "";
    renderPaginaLuzYTiempo();
    logeado = false;
};
