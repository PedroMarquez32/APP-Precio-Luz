//author: Francisco Jose Salmeron Puig
import './spinner.css'
export const createSpinner = () => { 
    const spinner= document.createElement("div");
    spinner.id="spinner";
    spinner.classList.add("hidden", "spinner");
    
    const elementoSpinner = document.createElement("div");
    elementoSpinner.classList.add("spinner-element");

    spinner.appendChild(elementoSpinner);
    return spinner;
}

export const showSpinner = () => {
    const spinner = document.getElementById("spinner");
    spinner.classList.remove("hidden");
}

export const hideSpinner = () => {
    const spinner = document.getElementById("spinner");
    spinner.classList.add("hidden");
}     