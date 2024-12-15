<<<<<<< HEAD
import dotenv from 'dotenv';
import url from 'node:url';
import path from 'path';

dotenv.config();

export const ROOTDIR = path.dirname(path.dirname(path.dirname(url.fileURLToPath(import.meta.url))));

export const PORT = process.env.PORT || 3000;

export const DATABASE_PATH_REL = process.env.DATABASE_PATH

export const DATABASE_PATH = ROOTDIR + DATABASE_PATH_REL || "./database/data.sqlite";

export const API_LUZ_URL= process.env.API_LUZ_URL || "https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=2024-01-01T00:00&end_date=2024-01-01T23:59&time_trunc=hour";
export const API_LUZ_HOUR_RANGES= process.env.API_LUZ_HOUR_RANGES || "00:00-06:00,06:00-12:00,12:00-18:00,18:00-24:00";
=======
/**
 * Config de los dotenv 
 */

//Configuraciones necesarias del proyecto.
import dotenv from 'dotenv';

dotenv.config(); 

export const PORT = process.env.PORT || 3000; 
export const DATABASE_PATH = process.env.DATABASE_PATH || "./database/db.sqlite"; 
export const API_LUZ_URL= process.env.API_LUZ_URL || "https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=2024-01-01T00:00&end_date=2024-01-01T23:59&time_trunc=hour";
export const API_LUZ_HOUR_RANGES= process.env.API_LUZ_HOUR_RANGES || "00:00-06:00,06:00-12:00,12:00-18:00,18:00-24:00";
export const API_KEY_WEATHER = process.env.API_KEY_WEATHER || "b14b64f4be54a384bf4b7e6b54ffc5ca";
>>>>>>> 535e167bb86673c4e52ae96b26f25e650d140ddb

