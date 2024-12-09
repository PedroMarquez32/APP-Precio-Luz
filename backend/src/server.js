<<<<<<< HEAD
import express from 'express';
import path from 'path'

import { PORT, ROOTDIR } from './config/config.js';
import userRoutes from './routes/userRoutes.js';
import rootRoutes from './routes/rootRoutes.js';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(ROOTDIR,"public")));

app.use("/", rootRoutes);
app.use("/users", userRoutes);

app.listen(PORT , ()=>{
    console.log(`Servidor ejecutandose en url: http://localhost:${PORT}`);
})
=======
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
>>>>>>> fef78b5ddc37dddc1dcd16ddde423b667d837254
