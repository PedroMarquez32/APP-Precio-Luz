import dotenv from 'dotenv';
import url from 'node:url';
import path from 'path';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const DATABASE_PATH = process.env.DATABASE_PATH || "./database/data.sqlite";

export const ROOTDIR = path.dirname(path.dirname(path.dirname(url.fileURLToPath(import.meta.url))));


