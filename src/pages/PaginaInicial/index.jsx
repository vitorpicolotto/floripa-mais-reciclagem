import { Link } from "react-router-dom";
//Falta incluir: a quantidade de pessoas que contribuem para a página e de locais
            //Lista de locais de coleta
            //Estilizar e mudar a semântica do HTML
            

function PaginaInicial(){
    return(
    <div>
    <h1>Pagina Inicial</h1>
    <h2>Bem-vindo(a) ao Floripa Mais Reciclagem</h2>
    <h4>Confira os lugares de coleta de lixo reciclável mais perto da sua casa!</h4>
    <h3>Você também pode participar dessa corrente! <Link to="/cadastro-usuario">Cadastre-se</Link> ou faça seu <Link to="/login">login</Link> para informar novos pontos de coleta e ajudar nossa cidade</h3>
    </div>
    )
}

export default PaginaInicial;