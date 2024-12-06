// traer la data de los precios de la luz y retornarla

export async function getDataPrice(urlData) {
    const response = await fetch(urlData);
    const mapData = new Map();
    if(!response.ok){
        throw new Error("Error: Error en la API")
    }
    const data = await response.json();
    mapData.set("Precio Mercado",data.included[1].attributes.values);
    return mapData;
};