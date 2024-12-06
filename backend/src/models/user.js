import db from "./database.js";

export const createUser = (email,password,callback)=>{
    const sql = `INSERT INTO user (email, password) VALUES (?,?)`;
    const params = [email, password];
    db.run(sql, params,function(err){
        callback(err,{id:this.lastID});
    });
}

export const getUserByEmail = (email,callback)=>{
    const sql = `SELECT * FROM user WHERE email=?`;
    db.get(sql, email, function(err,row){
        callback(err,row);
    })
}

export const getAllUser = (callback) =>{
    const sql = `SELECT * FROM user`;
    db.all(sql,[],function(err,rows){
        callback(err,rows);
    })
}