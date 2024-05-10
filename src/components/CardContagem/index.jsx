import { useEffect, useState } from "react";
import "./style.css"


const CardContagem = () => {
    const [totalUsuarios, setTotalUsuarios] = useState();
    const [totalLocais, setTotalLocais] = useState();


    useEffect(() =>{
        const carregarDados = async ()=>{
            try{
                const response = await fetch ("../../public/dados.json");
                const dados = await response.json();

                const quantidadeUsuarios = dados.usuarios.length;
                const quantidadeLocais = dados.coletas.length;

                setTotalUsuarios(quantidadeUsuarios);
                setTotalLocais(quantidadeLocais)
            } catch{
                console.error("Erro ao carregar os dados", error)
            }
        }

        carregarDados();
    }, [])

    return(
        <div className="card-container">
            <h3>Nosso aplicativo já conta com {totalUsuarios} usuários cadastrados e {totalLocais} locais de coleta disponíveis!</h3>
            <h4>Venha conferir o local mais perto de você ou cadastre um novo para ajudar os moradores da sua região!</h4>
        </div>
    )


}


export default CardContagem;