<<<<<<< HEAD
<<<<<<< HEAD
=======
/**
 * Config inicial del server
 */
import cors from 'cors';
>>>>>>> cef8feae1ed043a03d5a6321b7d7a1b1036b6ab2
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

<<<<<<< HEAD
app.use("/", rootRoutes);
app.use("/users", userRoutes);
app.use("/prices",priceRoutes);

app.listen(PORT , ()=>{
    console.log(`Servidor ejecutandose en url: http://localhost:${PORT}`);
});
=======
>>>>>>> cef8feae1ed043a03d5a6321b7d7a1b1036b6ab2

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
