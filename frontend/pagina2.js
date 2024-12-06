import { cardPrices } from "./components/cardPrices/cardPrices.js";
import { createdGraph } from "./components/grafico/chart.js";
import { createdHoursRanges } from "./components/hoursRangeSelect/hoursRangeSelect.js";
import { createLoadButton } from "./components/loadButton/loadButton.js";
import { createDiv } from "./components/navIndex/navIndex.js";
import { createSpinner, hideSpinner, showSpinner } from "./components/spinner/spinner.js";
import { getDataPrice } from "./helpers/getDataPrices.js";
// -------- Delcaracion de variables ------
const urlData = import.meta.env.VITE_HOUR_PRICES;
let starHour = "";
let endHour = "";
let dataPrices = [];

// --------- Delcaracion de funciones -----
const hourRangeValue = (event) => {
    const selectedValue = event.target.value;  // Obtener el valor seleccionado del select o rango de horas
    [starHour, endHour] = selectedValue.split("-");
};

const handleClick = async() => {
    showSpinner(); // muestra el spinner de carga
    const data = await getDataPrice(urlData); //cogemos la data seleccionada
    dataPrices = data;
    const divPrice = cardPrices(dataPrices,starHour,endHour);
    const graph = createdGraph(starHour,endHour,await data.entries().next().value[1]);
    app.textContent = "";
    renderPaginaLuz();
    app.appendChild(await divPrice);
    app.appendChild(graph);
    renderFooter();
    hideSpinner(); // ocultamos el spinner de cargar    
};


function renderPaginaLuz() {
   starHour = "00:00";
    endHour = "06:00";

    app.textContent = "";
    const DivIndex = createDiv();
    app.appendChild(DivIndex);

    const spinner = createSpinner(); 
    
    const loadPricesBtn = createLoadButton();
    
    const selectHourRanges = createdHoursRanges();
        
    app.append(spinner,loadPricesBtn,selectHourRanges);

    selectHourRanges.addEventListener("change",hourRangeValue); 
    loadPricesBtn.addEventListener('click', handleClick); // para funcion que necesita parametros metodo, ()=>funcion(parametros); 

};

function renderPaginaDefault() {
    
    const app = document.getElementById("app");
    // LOGO QUE HAY QUE PONER
    const divIndex = createDiv();
    app.appendChild(divIndex);

    document.getElementById("luz-btn").addEventListener('click',renderPaginaLuz);
};

renderPaginaDefault();