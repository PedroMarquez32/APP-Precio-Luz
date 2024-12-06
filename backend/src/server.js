import express from 'express';
import path from 'path'

import { PORT, ROOTDIR } from './config/config.js';
import rootRoutes from './routes/rootRoutes.js';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(ROOTDIR,"public")));

app.use("/",rootRoutes);

app.listen(PORT , ()=>{
    console.log(`Servidor ejecutandose en url: http://localhost:${PORT}`);
})