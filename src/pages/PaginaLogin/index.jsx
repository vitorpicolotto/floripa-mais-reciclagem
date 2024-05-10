import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UsuariosContext } from "../../context/UsuariosContext";
import "./styles.css"


function PaginaLogin(){
    const {login} = useContext(UsuariosContext)


    const [usuario, setUsuario] = useState({
        email:"",
        senha:""
    })

    async function realizarLogin(){
       await login(usuario.email, usuario.senha)
    }


    return(
        <div className="login">
            <h1 className="login-titulo">FLORIPA MAIS RECICLAGEM</h1>
                
                <div className="login-form">
                    <h2 className="login-form-titulo">Faça seu login!</h2>
                    <label className="login-label">E-mail: </label>
                    <input className="login-input" type="email" value={usuario.email} onChange={(e) => setUsuario({...usuario, email: e.target.value})}/>

                    <label className="login-label">Senha: </label>
                    <input className="login-input" type="password" value={usuario.senha} onChange={(e) => setUsuario({...usuario, senha: e.target.value})} />

                    <button className="login-btn" onClick={() => realizarLogin()}>Entrar</button>          

                    <h3 className="login-form-texto">Você também pode participar dessa corrente! Não tem uma conta? <Link className="login-link" to="/cadastro-usuario">Cadastre-se</Link> aqui!</h3>
                </div>
            
        </div>
    )
}

export default PaginaLogin;