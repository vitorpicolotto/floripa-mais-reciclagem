import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PaginaInicial from "../pages/PaginaInicial";
import PaginaLogin from "../pages/PaginaLogin";
import PaginaCadastroUsuario from "../pages/PaginaCadastroUsuario";
import PaginaCadastroColeta from "../pages/PaginaCadastroColeta";
import PaginaListaLocaisColeta from "../pages/PaginaListaLocaisColeta";

const routes = createBrowserRouter ([
    {
        path: "/login",
        element: <PaginaLogin />
    },
    
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <PaginaInicial />
            },           
            {
                path: "/cadastro-usuario", 
                element: <PaginaCadastroUsuario />
            },
            {
                path: "/cadastro-local-coleta",
                element: <PaginaCadastroColeta />
            },
            {
                path: "/lista-locais-coleta",
                element: <PaginaListaLocaisColeta />
            }
        ]
    }
])

export default routes;