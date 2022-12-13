import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./assets/GlobalStyle"
import Header from "./components/Header/Navbar"
import Home from "./pages/Home/Home"
import Sessions from "./pages/Sessions/Sessions"
import Seats from "./pages/Seats/Seats"
import Success from "./pages/Success/Success"
import { useState } from "react"

export default function App() {

  const [successBuy, setSuccessBuy] = useState({})
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sessoes/:idFilme" element={<Sessions/>}/>
        <Route path="/assentos/:idSessao" element={<Seats setSuccessBuy={setSuccessBuy}/>}/>
        <Route path="/sucesso" element={<Success successBuy={successBuy}/>}/>
      </Routes>
    </BrowserRouter>
  )
}
