import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";


export const ColetasContext = createContext()

export const ColetasContextProvider = ({children}) => {
    const [coletas, setColetas] = useState([]);
    const dados = useFetch("../../public/dados.json")

    useEffect(()=>{
        if (dados && dados.coletas){
            setColetas(dados.coletas)
        }
    }, [dados])


const cadastrarColeta = (novaColeta) => {
    const updatedColetas = [...coletas, novaColeta];
    setColetas(updatedColetas);

    fetch("http://localhost:3000/coletas", {
        method:"POST",
        body: JSON.stringify(novaColeta),
        headers:{
            'Content-Type': 'application/json'
        },
    })
    .then(()=>alert("Local cadastrado com sucesso"))
    .catch((error) => console.error("Erro ao cadastrar novo local", error))
    }

    return (
        <ColetasContext.Provider value={{coletas, cadastrarColeta}}>
            {children}
        </ColetasContext.Provider>
    )
}

