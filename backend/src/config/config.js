import dotenv from 'dotenv';
import url from 'node:url';
import path from 'path';

dotenv.config();

export const ROOTDIR = path.dirname(path.dirname(path.dirname(url.fileURLToPath(import.meta.url))));

export const PORT = process.env.PORT || 3000;

export const DATABASE_PATH_REL = process.env.DATABASE_PATH

export const DATABASE_PATH = ROOTDIR + DATABASE_PATH_REL || "./database/data.sqlite";




