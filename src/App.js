import "./App.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./Components/Home/Home"
import ContractUs from "./Components/Contract/ContractUs"
import Services from "./Pages/Services/Services"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contact" element={<ContractUs></ContractUs>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
