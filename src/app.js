//const express = require('express') //Esto
import express from 'express' // Y esto son lo mismo
import employeesRoutes from './Routes/employees.routes.js'
import indexRoutes from './Routes/index.routes.js'
import'./config.js'

const app = express()

app.use('/api',express.json())

app.use('/api',indexRoutes)
app.use('/api',employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'El endpoint no fue encontrado'
    })
})

export default app;