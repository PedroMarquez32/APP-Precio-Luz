<<<<<<< HEAD
=======
/**
 * Crear la dadtabase por si acaso no existe.
 */

>>>>>>> 535e167bb86673c4e52ae96b26f25e650d140ddb
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
<<<<<<< HEAD
         CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE,
            password TEXT
        )`
    );
    db.run(
        ` CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password TEXT
        )`
    );
=======
        CREATE TABLE IF NOT EXISTS user (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           email TEXT UNIQUE,
           password TEXT
       )`)

>>>>>>> 535e167bb86673c4e52ae96b26f25e650d140ddb
    db.run(
        `CREATE TABLE IF NOT EXISTS prices (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp TEXT,
            price REAL
        )`
    );
});

export default db;
