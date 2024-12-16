import express from 'express';
import { fetchWeatherData } from '../controller/weatherController.js';

const router = express.Router();

router.post('/weather', fetchWeatherData);

export default router;