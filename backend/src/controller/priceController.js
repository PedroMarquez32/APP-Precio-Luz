import { insertPrice, getAllPrices } from '../models/priceModel.js';
import { API_LUZ_URL } from '../config/config.js';

export const fetchPrices = async (req, res) => {
    try {
        const response = await fetch(API_LUZ_URL);
        if (!response.ok) {
            throw new Error(`Error en la API externa`);
        }

        const data = await response.json();

        const prices = data.included[0]?.attributes?.values; // Vale loque hace aqui la ? es encadenar de maneta que en vez de devolver error en caso de error devuelve undefined
 
        if (prices && Array.isArray(prices)) {
            // Iterar sobre los precios y guardarlos en la base de datos
            for (const { datetime, value } of prices) {   // Se hace con for of en vez de forEach porque puedo parar cuadno quiere y lo veo mas claro
                insertPrice(datetime, value, (err) => {
                    if (err) {
                        console.error('Error al insertar precio:', err.message);
                    }
                });
            }
        } else {
            console.error('No se encontraron precios en la respuesta de la API.');
        }

        res.status(200).json({ message: 'Datos actualizados correctamente.' });
    } catch (error) {
        console.error('Error en fetchPrices:', error.message);
        res.status(500).json({ error: 'Error al obtener los datos.' });
    }
};

export const getPrices = (req, res) => {
    getAllPrices((err, rows) => {
        if (err) {
            console.error('Error al obtener precios:', err.message);
            return res.status(500).json({ error: 'Error al obtener los precios.' });
        }
        res.status(200).json(rows);
    });
};


