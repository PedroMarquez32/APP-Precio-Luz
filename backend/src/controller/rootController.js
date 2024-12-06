import path from 'path';
import { ROOTDIR } from '../config/config.js';

export const getIndexHandler = (req, res) => {
    res.sendFile(path.join(ROOTDIR + "/public/login.html"));
};





// export function getPostFormHandler(req,res){
//     const { form, email, password }= req.body;
//     if(form==="loginform"){
//         getClientByEmailHandler(email, req,res);
//     }else if(form==="signinform"){
//         createClientHandler(email,password,req,res);
//     }
// }