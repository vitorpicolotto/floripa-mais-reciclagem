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

    return(
        <UsuariosContext.Provider value={{usuarios, cadastrarUsuario}}>
        {children}
        </UsuariosContext.Provider>
    )


}