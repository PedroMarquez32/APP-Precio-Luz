import db from "./database.js";

export const createClient = (email,password,callback)=>{
    const sql = `INSERT INTO cliente (email, password) VALUES (?,?)`;
    const params = [email, password];
    db.run(sql, params,function(err){
        callback(err,{id:this.lastID});
    });
}