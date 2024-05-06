import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from "./router/routes.jsx"
import { RouterProvider } from 'react-router-dom'
import { UsuariosContextProvider } from './context/UsuariosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <UsuariosContextProvider>
 <RouterProvider router={routes} />
 </UsuariosContextProvider>
)
