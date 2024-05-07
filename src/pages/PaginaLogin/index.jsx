import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UsuariosContext } from "../../context/UsuariosContext";


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
        <div>
            <h1>Faça seu login!</h1>

                <label>E-mail: </label>
                <input type="email" value={usuario.email} onChange={(e) => setUsuario({...usuario, email: e.target.value})}/>

                <label>Senha: </label>
                <input type="password" value={usuario.senha} onChange={(e) => setUsuario({...usuario, senha: e.target.value})} />

                <button onClick={() => realizarLogin()}>Entrar</button>              

            
            <h3>Você também pode participar dessa corrente! Não tem uma conta? <Link to="/cadastro-usuario">Cadastre-se</Link> aqui!</h3>
        </div>
    )
}

export default PaginaLogin;