/**
 * Config inicial del server
 */

import express from 'express';
import { PORT } from './config/config.js';

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    
})

// app.use("/api/user",userRoutes);

app.listen(PORT,()=>{
    console.log(`Server ejecutandose en la url: https://localhost:${PORT}`);
});