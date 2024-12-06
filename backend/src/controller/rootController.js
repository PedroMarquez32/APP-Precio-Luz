import path from 'path';
import { ROOTDIR } from '../config/config.js';

export const getIndexHandler = (req, res) => {
    res.sendFile(path.join(ROOTDIR + "/public/login.html"));
};


export const getPostFormHandler = (req,res)=>{
    const { form, email, password }= req.body;
    console.log("hola");
    console.log(req.body);
    if(form==="loginform"){
        console.log("formulario1");
    }else if(form==="signinform"){
        console.log("formulario2");
    }
}