
const dataWeather = import.meta.env.VITE_GET_WEATHER;

export async function getDataWheater(city) {
    try {
        const weather = await fetch(`${dataWeather}?&city=${city}`);
        const mapData = new Map();
        if(!weather.ok){
            throw new Error("Error: error en la API")
        }
        const data = await weather.json();
        mapData.set("Wheaters",data);
        return mapData;
    } catch (error) {
        console.error("Error: ", error);
    }
}