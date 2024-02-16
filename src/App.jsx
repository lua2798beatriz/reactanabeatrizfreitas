import {BrowserRouter, Route,Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Banner from "./componentes/Banner"
import Formulario from "./pages/Formulario"
import SobrePage from "./pages/SobrePage"
import Footer2 from "./componentes/Footer2"
import ComentarioPage2 from "./pages/ComentarioPage2"

function App() {
  return (
    <BrowserRouter>
   <Banner />
     <Routes>
     <Route path="/" element={<HomePage />}/>
      <Route path="/sobre" element={<SobrePage />}/>
      <Route path="/comentario" element={<ComentarioPage2 />}/>
    <Route path="/formulario" element={<Formulario />}/>
     </Routes>
    <Footer2 />
      </BrowserRouter>
  )
}

export default App
