import React from "react"
import Header from "../Header/Header"
import { Container } from "@mui/material"

import './Default.css'

const Default = ({ children }) => {
    return (
        <>
            <Header />
            <Container className="container">
                {children}
            </Container>
        </>
    )
}

export default Default