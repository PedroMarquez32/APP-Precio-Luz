//author: Francisco Jose Salmeron Puig
const dataWeather = import.meta.env.VITE_GET_WEATHER;

export async function getDataWheater(city) {
    try {
        // Verificar que se pase un nombre de ciudad válido
        if (!city || typeof city !== 'string') {
            throw new Error('El parámetro "city" es obligatorio y debe ser un string.');
        }

        // Hacer la solicitud al backend
        const weather = await fetch(`${dataWeather}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city }),
        });

        const mapData = new Map();

        // Verificar si la respuesta es válida
        if (!weather.ok) {
            throw new Error('Error en la solicitud al backend.');
        }

        // Parsear los datos obtenidos
        const data = await weather.json();
        mapData.set('Wheaters', data);

        return mapData;
    } catch (error) {
        console.error('Error: ', error);
    }
}