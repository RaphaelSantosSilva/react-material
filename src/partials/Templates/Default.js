import React from "react"
import Container from '@mui/material/Container'

import Header from "../Header/Header"
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