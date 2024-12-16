import { API_KEY_WEATHER } from '../config/config.js';

export const fetchWeatherData = async (req, res) => {
    try {
        // Extraer "city" del cuerpo de la solicitud
        const { city } = req.body;

        // Validar que se proporcionó el parámetro "city"
        if (!city) {
            return res.status(400).json({ error: 'El parámetro "city" es obligatorio.' });
        }

        // Construir la URL con los parámetros
        const urlData = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY_WEATHER}&units=metric`;

        // Realizar la solicitud a la API de OpenWeather
        const responseData = await fetch(urlData);

        // Verificar si la respuesta es válida
        if (!responseData.ok) {
            throw new Error('Error en la API de OpenWeather');
        }

        // Parsear los datos obtenidos
        const data = await responseData.json();

        // Devolver la respuesta al cliente
        return res.status(200).json(data);
    } catch (error) {
        // Manejar errores
        console.error('Error al obtener los datos de la API de OpenWeather:', error.message);
        res.status(500).json({ error: 'Error al obtener los datos de la API de OpenWeather.' });
    }
};