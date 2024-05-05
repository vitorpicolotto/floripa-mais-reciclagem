import useFetch from "../../hooks/useFetch"
import { useState, useEffect } from "react"
import CardColeta from "../../components/CardColeta"

function PaginaListaLocaisColeta(){
    const dados = useFetch("/coletas.json")
    const [locaisColeta, setLocaisColeta] = useState([])

    useEffect(()=>{
        if(!!dados){
          setLocaisColeta(dados.coletas)
        }
      }, [dados])

    return(
        <>
        <h1>Locais de Coleta</h1>
        {!!locaisColeta && locaisColeta.map((dados, index) => (
      <CardColeta dadosColeta={dados} key={index} />
        ))}
        </>
    )
}

export default PaginaListaLocaisColeta;