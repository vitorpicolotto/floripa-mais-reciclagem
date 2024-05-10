import {Link} from "react-router-dom";
import "./style.css"

function Header() {

    const logOut = () => {
        localStorage.removeItem("isLogged");
        window.location.reload();
    }

    return(
        <header className="header">
            <Link className="titulo" to="/"><h3>Floripa + Reciclagem</h3></Link>
            <nav className="nav">
                <Link className="link" to="/cadastro-local-coleta">Cadastrar Local</Link>
                <Link className="link" to="/lista-locais-coleta">Pontos de Coleta</Link>
                <Link onClick={logOut} className="link" to="/login">Sair</Link>
            </nav>
        </header>

    )
}

export default Header;