import cors from 'cors';
import express from 'express';
import path from 'path'

import { PORT } from './config/config.js';
import userRoutes from './routes/userRoutes.js';

const app = express();



app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json());
app.use("/api/user", userRoutes);

app.listen(PORT , ()=>{
    console.log(`Servidor ejecutandose en url: http://localhost:${PORT}`);
})