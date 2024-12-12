// tarjeta con los precios de la luz

export const cardPrices = async (data,starHour,endHour) => {
    const divPrice = document.createElement("div");
    divPrice.id = "cardPrice";
    data.get("Precio Mercado").forEach(element => {
        const { timestamp,price } = element;
        // Compraramos las horas para filtras las que hemos puesto.
        if(timestamp.split("T")[1].split(":")[0] >= starHour.split(":")[0] && timestamp.split("T")[1].split(":")[0] <= endHour.split(":")[0]){

            const card = document.createElement("div");
            card.classList.add("card");
          
            card.innerHTML = `
                <h5>Fecha:<br>${timestamp.split("+")[0]}</h5>
                <h5>Precio: ${price} KW/H</h5>
            `;

            divPrice.appendChild(card);
        }
    });
    return divPrice;
};