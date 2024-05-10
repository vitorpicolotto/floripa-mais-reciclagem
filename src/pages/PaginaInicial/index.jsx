import CardContagem from "../../components/CardContagem";
import "./styles.css"
            

function PaginaInicial(){
    return(
    <div className="dashboard">
        <h1 className="dashboard-titulo">Bem-vindo(a) ao Floripa Mais Reciclagem</h1>
        <h3 className="dashboard-apresentacao">Aqui você pode descobrir pontos de coleta seletiva próximos de você, os tipos de item que cada local recebe, além de cadastrar essas informações para ajudar a população manezinha a destinar seu lixo de maneira correta!</h3>
        <CardContagem />
    
    </div>
    )
}

export default PaginaInicial;