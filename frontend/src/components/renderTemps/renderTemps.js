//author: Francisco Jose Salmeron Puig

export function createdCardTemp(temperaturas){
    const divTemps = document.createElement("div");
    divTemps.id = "temps";

    const infoContainer = document.createElement("div");
    infoContainer.className = "info-container"; 

    temperaturas.forEach(element => {
        const { dt_txt } = element;
        const { temp, temp_max, temp_min } = element.main;

        const today = new Date();
        const dayOfMonth = today.getDate();
        
        if(dt_txt.split(" ")[0].split("-")[2] == dayOfMonth){

            const card = document.createElement("div");
            card.classList.add("card");
          
            card.innerHTML = `
                <h5>Fecha:<br>${dt_txt}</h5>
                <h5>Temperatura: ${temp}°C</h5>
                <h5>Temperatura Maxima: ${temp_max}°C</h5>
                <h5>Temperatura Minima: ${temp_min}°C</h5>
            `;

            infoContainer.appendChild(card);
        }
    });
    divTemps.appendChild(infoContainer);
    return divTemps;
}