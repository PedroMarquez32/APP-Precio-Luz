import express from 'express';
import { fetchPrices, getPrices } from '../controller/priceController.js';

const router = express.Router();

router.get('/fetch-prices', fetchPrices); // Llamada para obtener datos desde la API y almacenarlos
router.get('/prices', getPrices);        // Llamada para obtener todos los precios de la BD

export default router;
