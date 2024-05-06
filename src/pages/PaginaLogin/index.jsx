import { useState } from "react";
import { Link } from "react-router-dom";

//falta fazer: lógica de autenticação de login
            //submeter o formulário para "entrar" no sistema e salvar no json ou local storage

function PaginaLogin(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (evento) => {
        evento.preventDefault();
        //precisa fazer a lógica de autenticação
    }


    return(
        <div>
            <h1>Faça seu login!</h1>
            <form onSubmit={handleLogin}>
                <label>E-mail: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label>Senha: </label>
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

                <button type="submit">Entrar</button>              

            </form>
            <h3>Você também pode participar dessa corrente! Não tem uma conta? <Link to="/cadastro-usuario">Cadastre-se</Link> aqui!</h3>
        </div>
    )
}

export default PaginaLogin;