import "./App.css"
import Header from "./components/Header";
import  Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ColetasContextProvider } from "./context/ColetasContext";




function App() {
  

  return (
    <>
      <ColetasContextProvider>
      <Header />
      <Outlet />
      <Footer />
      </ColetasContextProvider>
      
    </>
  )
}

export default App
