

export function createdCardTemp(temperaturas){
    const divTemps = document.createElement("div");
    divTemps.id = "temps";
    temperaturas.forEach(element => {
        const { dt_txt } = element;
        const { temp, temp_max, temp_min } = element.main;
        // Compraramos las horas para filtras las que hemos puesto.

            const card = document.createElement("div");
            card.classList.add("card");
          
            card.innerHTML = `
                <h5>Fecha:<br>${dt_txt}</h5>
                <h5>Temperatura: ${temp}°C</h5>
                <h5>Temperatura Maxima: ${temp_max}°C</h5>
                <h5>Temperatura Minima: ${temp_min}°C</h5>
            `;

            divTemps.appendChild(card);
        });
    return divTemps;
}