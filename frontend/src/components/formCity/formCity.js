const ranges = import.meta.env.VITE_HOUR_RANGES;

export function createdformCity(){
    const formCity = document.createElement("form");
    formCity.id = "formCity";

    formCity.innerHTML = `
    <input type="text" id="city" placeholder="Introduce el nombre de la ciudad"><br>
    <button id="temp-btn">Ver temperatura de la ciudad</button>
    `
    return formCity;
}