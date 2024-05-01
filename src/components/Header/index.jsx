import {Link} from "react-router-dom";
import "./style.css"

function Header() {

    return(
        <header className="header">
            <Link className="titulo" to="/"><h3>Floripa Mais Reciclagem</h3></Link>
            <nav className="nav">
                <Link className="link" to="/cadastro-local-coleta">Cadastrar Local</Link>
                <Link className="link" to="/lista-locais-coleta">Pontos de Coleta</Link>
                <Link className="link" to="/login">Login</Link>
            </nav>
        </header>

    )
}

export default Header;