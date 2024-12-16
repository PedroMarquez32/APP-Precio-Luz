import { API_KEY_WEATHER } from '../config/config.js';  


export const fetchWeatherData = async (req, res) => {
    try {
        const city  = req.body || "granada";
        const urlCity = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY_WEATHER}`;
        
        const responseCity = await fetch(urlCity);

        if(!responseCity.ok){
            throw new Error("Error en el fetch API Geocode");
        }
       const dataCity = await responseCity.json(); 
        const lat = dataCity[0].lat;
        const lon = dataCity[0].lon;

        // Verificar si la latitud y longitud están presentes
        if (!lat || !lon) {
            return res.status(400).json({ error: 'Se requieren latitud (lat) y longitud (lon)' });
        }

        // Construir la URL con los parámetros
        const urlData = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY_WEATHER}&units=metric`;

        const responseData = await fetch(urlData);

        if (!responseData.ok) {
            throw new Error('Error en la API de OpenWeather');
        }

        const data = await responseData.json();

        return res.status(200).json(data);
    } catch (error) {
        console.error('Error al obtener los datos de la API de OpenWeather:', error.message);
        res.status(500).json({ error: 'Error al obtener los datos de la API de OpenWeather.' });
    }
};