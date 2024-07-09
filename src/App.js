import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import TemplateDefault from './partials/Templates/Default'

const  App = () => {
  return (
    <TemplateDefault>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />}  />
          </Route>
        </Routes>
      </BrowserRouter>
    </TemplateDefault>
  )
}

export default App
