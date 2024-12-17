//author: Francisco Jose Salmeron Puig
// traer la data de los precios de la luz y retornarla
const fetchPrices = import.meta.env.VITE_FETCH_PRICES;
const dataPrice = import.meta.env.VITE_GET_PRICES;

export async function getDataPrice() {
    try {
        const getPrices = await fetch(fetchPrices);
        if(!getPrices.ok){
            throw new Error("Error: error al coger los precios de la API")
        }
        const prices = await fetch(dataPrice);
        const mapData = new Map();
        if(!prices.ok){
            throw new Error("Error: Error en la API")
        }
        const data = await prices.json();
        mapData.set("Precio Mercado",data);
        return mapData;
    } catch (error) {
        console.error("Error: ", error);
    }
}
