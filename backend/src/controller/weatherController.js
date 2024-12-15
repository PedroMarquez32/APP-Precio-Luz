import { API_KEY_WEATHER } from '../config/config.js';  
<<<<<<< HEAD
export const fetchWeatherData = async (req, res) => {
    try {
        // Obtener los parámetros de la consulta
        const { lat, lon, exclude } = req.query;
=======


export const fetchWeatherData = async (req, res) => {
    try {
        const city  = req.body;
        const urlCity = `http://api.openweathermap.org/geo/1.0/direct?q=${city}}&limit=1&appid=${API_KEY_WEATHER}`;
        
        const responseCity = await fetch(urlCity);

        if(!responseCity.ok){
            throw new Error("Error en el fetch API Geocode");
        }
       const dataCity = await responseCity.json(); 
        const lat = dataCity[0].lat;
        const lon = dataCity[0].lon;
>>>>>>> cef8feae1ed043a03d5a6321b7d7a1b1036b6ab2

        // Verificar si la latitud y longitud están presentes
        if (!lat || !lon) {
            return res.status(400).json({ error: 'Se requieren latitud (lat) y longitud (lon)' });
        }

        // Construir la URL con los parámetros
<<<<<<< HEAD
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude || ''}&appid=${API_KEY_WEATHER}`;

        // Realizar la solicitud con fetch
        const response = await fetch(url);

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error('Error en la API de OpenWeather');
        }

        const data = await response.json();
=======
        const urlData = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY_WEATHER}`;

        const responseData = await fetch(urlData);

        if (!responseData.ok) {
            throw new Error('Error en la API de OpenWeather');
        }

        const data = await responseData.json();
>>>>>>> cef8feae1ed043a03d5a6321b7d7a1b1036b6ab2

        return res.status(200).json(data);
    } catch (error) {
        console.error('Error al obtener los datos de la API de OpenWeather:', error.message);
        res.status(500).json({ error: 'Error al obtener los datos de la API de OpenWeather.' });
    }
};