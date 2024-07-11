import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Customers from "./pages/Customers"
import TemplateDefault from "./partials/Templates/Default"

const  App = () => {
  return (
    <BrowserRouter>
      <TemplateDefault>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </TemplateDefault> 
    </BrowserRouter>
  )
}

export default App
