import useFetch from "../../hooks/useFetch"
import { useState, useEffect } from "react"
import CardColeta from "../../components/CardColeta"
import "./styles.css"

function PaginaListaLocaisColeta(){
    const dados = useFetch("/dados.json")
    const [locaisColeta, setLocaisColeta] = useState([])

    // const excluirLocal = (localId) => {
    //   let novosLocais = locaisColeta.filter(locaisColeta => locaisColeta.id !== localId)
    //   setLocaisColeta(novosLocais);
    // }
    // onExcluir={() => excluirLocal(locaisColeta.id)} - coloquei no CardColeta abaixo
    // No button de excluir no CardColeta, chamei a onExcluir e não funcionou.

    useEffect(()=>{
        if(!!dados){
          setLocaisColeta(dados.coletas)
        }
      }, [dados])

    return(
        <div className="locais">
          <h1 className="locais-titulo">Locais de Coleta</h1>
            <div className="locais-card">
              {!!locaisColeta && locaisColeta.map((dados, index) => (
              <CardColeta dadosColeta={dados} key={index}  />
             ))}
            </div>
        </div>
    )
}

export default PaginaListaLocaisColeta;