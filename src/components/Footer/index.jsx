import "./style.css"

function Footer(){

    return(
       <footer className="rodape">
        <h3 className="rodape-titulo">Floripa Mais Reciclagem</h3>
        <p className="rodape-nome">Desenvolvido por Vitor Picolotto - Futuro Dev</p>
        <div >
            <ul className="rodape-lista">
                <li><a className="rodape-link" href="https://www.linkedin.com/in/vitor-picolotto/" target="_blank">LinkedIn</a></li>
                <li><a className="rodape-link" href="https://github.com/vitorpicolotto" target="_blank">GitHub</a></li>
            </ul>
        </div>
       </footer>
    )
}

export default Footer;