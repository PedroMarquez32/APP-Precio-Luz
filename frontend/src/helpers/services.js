import { renderPaginaLuzYTiempo } from "../main";

export const createUserRequest = async (dataUrlUser, email, password) =>{
    try {
        const response = await fetch(dataUrlUser, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        if(!response.ok){
            throw new Error("Error al obtener la respuesta")
        }
        const data = await response.json();
        console.log("Usuario creado correctamente ", data);
        return data;
    } catch (error) {
        console.log("Error al crear el usuario ", error)
        return false;
    }
}



export const loginUserRequest = async (dataUrlUser, email, password)=>{
    try{
        const response = await fetch(dataUrlUser, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        if(!response.ok){
            throw new Error("Error al obtener la respuesta")
        }
        const data = await response.json();
        alert("Autentificación exitosa");
        renderPaginaLuzYTiempo();
    } catch (error) {
        alert("Usuario/contraseña inválido");
        console.log("Usuario/contraseña inválido", error)
    }
}