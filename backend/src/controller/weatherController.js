import { API_KEY_WEATHER } from '../config/config.js';  
export const fetchWeatherData = async (req, res) => {
    try {
        // Obtener los parámetros de la consulta
        const { lat, lon, exclude } = req.query;

        // Verificar si la latitud y longitud están presentes
        if (!lat || !lon) {
            return res.status(400).json({ error: 'Se requieren latitud (lat) y longitud (lon)' });
        }

        // Construir la URL con los parámetros
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude || ''}&appid=${API_KEY_WEATHER}`;

        // Realizar la solicitud con fetch
        const response = await fetch(url);

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error('Error en la API de OpenWeather');
        }

        const data = await response.json();

        return res.status(200).json(data);
    } catch (error) {
        console.error('Error al obtener los datos de la API de OpenWeather:', error.message);
        res.status(500).json({ error: 'Error al obtener los datos de la API de OpenWeather.' });
    }
};