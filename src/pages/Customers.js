import { useEffect, useState } from "react"
import axios from "axios"
import CustomerCard from "../components/CustomerCard"
import { Outlet } from "react-router-dom"
import { Grid, Typography } from "@mui/material"

const Customers = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
        .then(response => {
            const { data } = response.data

            setCustomers(data)
        })
    }, [])

    return (
        <>
            <Typography variant="h3" style={{
                margin: 15,
                textTransform: 'uppercase',
                letterSpacing: 5
            }}>
                Customers
            </Typography>
            <Grid container spacing={6}>
                {
                    customers.map(item =>(
                        <Grid item xs={12} md={4}>
                            <CustomerCard 
                                name={item.first_name}
                                lastname={item.last_name}
                                email={item.email}
                                avatar={item.avatar}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            <Outlet />
        </>
    )
}

export default Customers