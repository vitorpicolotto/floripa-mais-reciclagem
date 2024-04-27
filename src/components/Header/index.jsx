import {Link} from "react-router-dom";
import "./style.css"

function Header() {

    return(
        <header>
            <Link className={styles.header} to="/"><h3>Floripa Mais Reciclagem</h3></Link>
            <nav className={styles.nav}>
                <Link className={styles.link} to="/cadastro-local-coleta">Cadastrar Local</Link>
                <Link className={styles.link} to="/lista-locais-coleta">Pontos de Coleta</Link>
                <Link className={styles.link} to="/login">Login</Link>
            </nav>
        </header>

    )
}

export default Header;