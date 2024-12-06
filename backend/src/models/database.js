import sqlite3 from 'sqlite3';
import { DATABASE_PATH } from '../config/config.js';

const db = new sqlite3.Database(DATABASE_PATH, err=>{
    if(err){
        console.error("Error al conectar a la bd",err);
    }else{
        console.log("Conexion exitosa a la bd");
    }
});

db.serialize(()=>{
    db.run(`
         CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE,
            password TEXT
        )`
    );
});

export default db;