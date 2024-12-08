/**
 * Config inicial del server
 */

import express from 'express';
import { PORT } from './config/config.js';
import priceRoutes from './routes/priceRoutes.js';

const app = express();

app.use(express.json());
app.use('/api', priceRoutes);

app.listen(PORT,()=>{
    console.log(`Server ejecutandose en la url: https://localhost:${PORT}`);
});