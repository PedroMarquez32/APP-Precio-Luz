//author: Luis Maldonado Hernández
//author: Dámaso Giménez Escudero
/**
 * Config inicial del server
 */
import cors from 'cors';
import express from 'express';
import { PORT } from './config/config.js';
import priceRoutes from './routes/priceRoutes.js';
import userRoutes from './routes/userRoutes.js';
import weatherRoutes from './routes/weatherRoutes.js'


const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use('/api', priceRoutes);
app.use('/api',userRoutes);
app.use('/api',weatherRoutes);

app.listen(PORT,()=>{
    console.log(`Server ejecutandose en la url: http://localhost:${PORT}`);
});


