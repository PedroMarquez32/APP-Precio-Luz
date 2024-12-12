// traer la data de los precios de la luz y retornarla
import db from "./database.js";


export const insertPrice = (timestamp, price, callback) => {
    const sqlDelete = `DELETE FROM prices`;
    const sqlInsert = `INSERT INTO prices (timestamp, price) VALUES (?, ?)`;

    db.run(sqlDelete, [], function (err) {
        if (err) {
            callback(err); 
        }

        db.run(sqlInsert, [timestamp, price], function (err, rows) {
            callback(err, rows);
        });
    });
};

export const getAllPrices = (callback) => {
    const sql = `SELECT * FROM prices ORDER BY timestamp ASC`;
    db.all(sql, [], function  (err, rows){
        callback(err, rows);
    });
    
};