import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import PaginaInicial from "../pages/PaginaInicial";
import PaginaLogin from "../pages/PaginaLogin";
import PaginaCadastroUsuario from "../pages/PaginaCadastroUsuario";
import PaginaCadastroColeta from "../pages/PaginaCadastroColeta";
import PaginaListaLocaisColeta from "../pages/PaginaListaLocaisColeta";


let isLogged = JSON.parse(localStorage.getItem("isLogged")) || false

const PrivateRoute = ({children}) => {
    return isLogged ? children : < Navigate to="/login" />; 
}

const routes = createBrowserRouter ([
    {
        path: "/login",
        element: <PaginaLogin />
    },
    {
        path: "/cadastro-usuario", 
        element: <PaginaCadastroUsuario />
    },

    {
        path: "/",
        element: (
        <PrivateRoute>
            <App />
        </PrivateRoute>
        ),
        children:[
            {
                path: "/",
                element: <PaginaInicial />
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