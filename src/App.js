import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Customers from "./pages/Customers"
import TemplateDefault from "./partials/Templates/Default"

const  App = () => {
  return (
    <TemplateDefault>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customers" element={<Customers />} />
        </Routes>
      </BrowserRouter>
    </TemplateDefault>
  )
}

export default App
