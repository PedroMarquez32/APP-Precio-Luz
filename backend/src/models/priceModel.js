// traer la data de los precios de la luz y retornarla
import db from "./database.js";

export const insertPrice = (timestamp, price, callback) => {
    const sql = `INSERT INTO prices (timestamp, price) VALUES (?, ?)`;
    db.run(sql, [timestamp, price], function(err,row){
        callback(err, row);
    });
};

export const getAllPrices = (callback) => {
    const sql = `SELECT * FROM prices ORDER BY timestamp ASC`;
    db.all(sql, [], function  (err, rows){
        callback(err, rows);
    });
    
};