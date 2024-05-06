import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const UsuariosContext = createContext()

export const UsuariosContextProvider = ({children}) => {
    const [usuarios, setUsuarios] = useState([]);
    const dados = useFetch("../../public/dados.json");


    useEffect(() =>{
        if (dados && dados.usuarios) {
            setUsuarios(dados.usuarios)
        }
    }, [dados])

    const cadastrarUsuario = (novoUsuario) => {
        const updatedUsuarios = [...usuarios, novoUsuario];
        setUsuarios(updatedUsuarios);

        fetch("http://localhost:3000/usuarios", {
            method: 'POST',
            body: JSON.stringify(novoUsuario),
            headers:{
                'Content-Type': "application/json"
            },
        })
        .then(()=>alert("Cadastrado com sucesso!"))
        .catch((error) => console.error("Erro ao cadastrar usuário", error))
    }

    async function login (email, senha){
        try {
            const response = await fetch ("http://localhost:3000/usuarios")
            const data = await response.json();

            let usuarioExiste = false

            data.map (usuario => {
                if(usuario.email == email){
                    usuarioExiste =true

                    if(usuario.senha==senha){
                        localStorage.setItem("isLogged", true)
                        window.location.href = "/"
                        return
                    }

                    alert("Senha incorreta!")
                    return
                }

            })

            if(!usuarioExiste){
                alert("Usuário não existe")
            }

        } catch {

        }

    }

    return(
        <UsuariosContext.Provider value={{usuarios, login, cadastrarUsuario}}>
        {children}
        </UsuariosContext.Provider>
    )


}