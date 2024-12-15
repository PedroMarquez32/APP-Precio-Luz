<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cef8feae1ed043a03d5a6321b7d7a1b1036b6ab2
/**
 * Crear la dadtabase por si acaso no existe.
 */

<<<<<<< HEAD
>>>>>>> 535e167bb86673c4e52ae96b26f25e650d140ddb
=======
>>>>>>> cef8feae1ed043a03d5a6321b7d7a1b1036b6ab2
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
=======
>>>>>>> cef8feae1ed043a03d5a6321b7d7a1b1036b6ab2
        CREATE TABLE IF NOT EXISTS user (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           email TEXT UNIQUE,
           password TEXT
       )`)

<<<<<<< HEAD
>>>>>>> 535e167bb86673c4e52ae96b26f25e650d140ddb
=======
>>>>>>> cef8feae1ed043a03d5a6321b7d7a1b1036b6ab2
    db.run(
        `CREATE TABLE IF NOT EXISTS prices (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp TEXT,
            price REAL
        )`
    );
});

export default db;
