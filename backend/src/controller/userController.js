import { createUser, getAllUser, loginUser } from "../models/user.js";

export const createUserHandler = (req,res)=>{
    const { email, password } = req.body;

        createUser(email, password, (err,result)=>{
            if(err){
                res.status(500).json({error: err.message});
            }else if(!email || !password){
                res.status(500).json({error: "No se permiten valores nulos"});
            }else{
                res.status(201).json(result);
            }
        })
}


export const loginUserHandler = (req, res)=>{
    const { email, password } = req.body;
    loginUser(email,password, (err,row)=>{
        if(err){
            res.status(500).json({error: err.message});
        }else if(!row){
            res.status(404).json({error: "Usuario o contraseña inválida"});
        }else{
            res.status(201).json({ redirectUrl: '/main'});
        }
    })
}

export const getAllUserHandler = (req,res) =>{
    getAllUser((err,rows)=>{
        if(err){
            res.status(500).json({error: err.message});
        }else{
            res.status(200).json(rows);
        }
    })
}

// export const getUserByIdHandler = (req,res) =>{
//     const { id } = req.params;

//     getClientById(id,(err,row)=>{
//         if(err){
//             res.status(500).json({error: err.message});
//         }else if(!row){
//             res.status(404).json({error: "Usuario no encontrado"});
//         }else{
//             res.status(200).json(row);
//         }
//     })
// }