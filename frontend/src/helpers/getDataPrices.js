// traer la data de los precios de la luz y retornarla
const dataPrice = "http://localhost:3000/api/prices";

export async function getDataPrice() {
        const prices = await fetch(dataPrice);
        const mapData = new Map();
        if(!prices.ok){
            throw new Error("Error: Error en la API")
        }
        const data = await prices.json();
        mapData.set("Precio Mercado",data);
        return mapData;
}
