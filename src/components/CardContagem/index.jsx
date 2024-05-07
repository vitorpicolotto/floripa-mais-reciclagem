import { useEffect, useState } from "react";


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
        <div>
            <h3>Nosso aplicativo já conta com {totalUsuarios} usuários cadastrados!</h3>
            <h3>Além disso, são {totalLocais} locais de coleta disponíveis. Venha conferir o local mais perto de você ou cadastre um novo para ajudar os moradores da sua região!</h3>
        </div>
    )


}


export default CardContagem;