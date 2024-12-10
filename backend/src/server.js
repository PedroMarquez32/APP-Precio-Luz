/**
 * Config inicial del server
 */
import cors from'cors';
import express from 'express';
import { PORT } from './config/config.js';
import priceRoutes from './routes/priceRoutes.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'  // Permitir solo solicitudes de este origen
}));

app.use(express.json());
app.use('/api', priceRoutes);

app.listen(PORT,()=>{
    console.log(`Server ejecutandose en la url: https://localhost:${PORT}`);
});