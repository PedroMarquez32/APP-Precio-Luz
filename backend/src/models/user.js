//author: Dámaso Giménez Escudero
import bcrypt from 'bcrypt';
import db from "./database.js";

const salt = 10;

export const createUser = async (email,password,callback)=>{

    bcrypt.hash(password, salt , function(err,hash) {
        const sql = `INSERT INTO user (email, password) VALUES (?,?)`;
        const params = [email, hash];
        db.run(sql, params,function(err){
            callback(err,{id:this.lastID});
        });
    });

}

export const loginUser = (email,password, callback)=>{

    const sql = `SELECT * FROM user WHERE email=?`;
    const params = [email];

    db.get(sql, params, function(err,row){

        if(row){
            bcrypt.compare(password, row.password, function(err,result){
                row = result ? row:null; 
                callback(err,row);
            })
        }else{
            callback(err,row);
        }

    })
}

export const getAllUser = (callback) =>{
    const sql = `SELECT * FROM user`;
    db.all(sql,[],function(err,rows){
        callback(err,rows);
    })
}