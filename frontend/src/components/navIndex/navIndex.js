
export function createDiv() {
    const div = document.createElement("div");
    div.id = "divIndex";

    const luzButton = document.createElement("button");
    luzButton.id = "luz-btn";
    luzButton.className = "luz-btn";
    luzButton.textContent = "Ver el precio de la luz";
    div.appendChild(luzButton);

    const timeButton = document.createElement("button");
    timeButton.id = "time-btn";
    timeButton.className = "time-btn";
    timeButton.textContent = "Ver el tiempo de hoy";  
    div.appendChild(timeButton);

    return div;
};




