import { cardPrices } from "./components/cardPrices/cardPrices.js";
import { createFooter } from "./components/footer/footer.js";
import { createdGraph } from "./components/grafico/chart.js";
import { createdHoursRanges } from "./components/hoursRangeSelect/hoursRangeSelect.js";
import { createLoadButton } from "./components/loadButton/loadButton.js";
import { createDiv } from "./components/navIndex/divIndex.js";
import { createSpinner, hideSpinner, showSpinner } from "./components/spinner/spinner.js";
import { getDataPrice } from "./helpers/getDataPrices.js";
import { renderLogin} from './components/login.js';
import { renderRegister } from './components/register.js';
import { getDataWheater } from "./helpers/getDataWheater.js";
import { createdformCity } from "./components/formCity/formCity.js";
import { createdCardTemp } from "./components/renderTemps/renderTemps.js";

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

// --------- Declaracion de funciones -----
function loadComponent(component) {
    const app = document.getElementById('app');
    app.innerHTML = ''; // Limpia el contenido previo
    app.appendChild(component);
  } 
  // Exportamos funciones para cambiar entre componentes
  export function switchToLogin() {
    loadComponent(renderLogin());
  }
  
  export function switchToRegister() {
    loadComponent(renderRegister());
  }

async function renderTemp(){
    event.preventDefault()
    const city = document.getElementById("city");
    const data = await getDataWheater(city.value.trim());
    const wheatersObject = data.get('Wheaters');

    const list = wheatersObject.list;
    renderPaginaWhitTime(list);
}

// Pagina luz y tiempo por defecto:
export function renderPaginaLuzYTiempo() {
    app.textContent = "";
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
 
    const formCity = createdformCity();
    app.appendChild(formCity);

    if(showFooter){
        renderFooter();
    }

    document.getElementById("temp-btn").addEventListener("click", renderTemp);
    
    document.getElementById("luz-btn").addEventListener('click',renderPaginaLuz);
    document.getElementById("time-btn").addEventListener('click',renderPaginaTime);
 };

 function renderPaginaWhitTime(temperaturas){
    app.textContent = "";

    const divIndex = createDiv();
    app.appendChild(divIndex);
 
    const spinner = createSpinner(); 
    
    app.appendChild(spinner);
 
    const formCity = createdformCity();
    app.appendChild(formCity);

    const renderTemps = createdCardTemp(temperaturas);
    app.appendChild(renderTemps);

    if(showFooter){
        renderFooter();
    }

    document.getElementById("temp-btn").addEventListener("click", renderTemp);
    
    document.getElementById("luz-btn").addEventListener('click',renderPaginaLuz);
    document.getElementById("time-btn").addEventListener('click',renderPaginaTime);
 }
// Ejecucion de codigo:
 // Carga inicial
loadComponent(renderLogin());