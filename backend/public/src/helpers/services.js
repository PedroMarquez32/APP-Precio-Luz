export const createUserRequest = async (dataUrlUser, email, password) =>{
    console.log("hola")
    const newData = {
        email: email,
        password: password
    }
    try {
        const response = await fetch(dataUrlUser, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newData)
        })
        if(!response.ok){
            throw new Error("Error al obtener la respuesta")
        }
        const data = await response.json();
        console.log("Usuario creado correctamente ", data);
        return data;
    } catch (error) {
        console.log("Error al crear el usuario ", error)
    }
}



export const getUserByEmailRequest = async (dataUrlUser, email) =>{
    try {
        const response = await fetch(dataUrlUser, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(email)
        })
        if(!response.ok){
            throw new Error("Error al obtener la respuesta")
        }
        const data = await response.json();
        console.log("Leídos los datos:", data);
        return data;
    } catch (error) {
        console.log("Error al obtener los datos ", error)
    }
}