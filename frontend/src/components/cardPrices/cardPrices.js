// tarjeta con los precios de la luz

export const cardPrices = async (data,starHour,endHour) => {
    const divPrice = document.createElement("div");
    divPrice.id = "cardPrice";
    
    const infoContainer = document.createElement("div");
    infoContainer.className = "info-container";
    
    data.get("Precio Mercado").forEach(element => {
        const { timestamp,price } = element;
        if(timestamp.split("T")[1].split(":")[0] >= starHour.split(":")[0] && 
           timestamp.split("T")[1].split(":")[0] <= endHour.split(":")[0]){

            const card = document.createElement("div");
            card.classList.add("card");
          
            card.innerHTML = `
                <div class="price-info">
                    <span class="time">Fecha: ${timestamp.split("+")[0]}</span>
                    <span class="price">Precio: ${price} KW/H</span>
                </div>
            `;

            infoContainer.appendChild(card);
        }
    });
    
    divPrice.appendChild(infoContainer);
    return divPrice;
};