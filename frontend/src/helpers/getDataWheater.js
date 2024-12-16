
const dataWeather = import.meta.env.VITE_GET_WEATHER;

export async function getDataWheater(city) {
    try {
        // Verificar que se pase un nombre de ciudad válido
        if (!city || typeof city !== 'string') {
            throw new Error('El parámetro "city" es obligatorio y debe ser un string.');
        }

        // Hacer la solicitud al backend
        const response = await fetch(dataWeather, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city }),
        });

        // Verificar si la respuesta es válida
        if (!response.ok) {
            throw new Error('Error en la solicitud al backend.');
        }

        // Parsear los datos obtenidos
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error al obtener los datos del clima:', error.message);
    }
}