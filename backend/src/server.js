<<<<<<< HEAD
import express from 'express';
import path from 'path'

import { PORT, ROOTDIR } from './config/config.js';
import userRoutes from './routes/userRoutes.js';
import rootRoutes from './routes/rootRoutes.js';
import priceRoutes from './routes/priceRoutes.js';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(ROOTDIR,"public")));

app.use("/", rootRoutes);
app.use("/users", userRoutes);
app.use("/prices",priceRoutes);

app.listen(PORT , ()=>{
    console.log(`Servidor ejecutandose en url: http://localhost:${PORT}`);
});

=======
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


>>>>>>> 535e167bb86673c4e52ae96b26f25e650d140ddb
