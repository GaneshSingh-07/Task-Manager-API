const express = require('express')
const router = require('./route/router')
const db_connect = require('./db/db_connect')
require('dotenv').config()
const notFound = require('./middleware/notFound')

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use('/api/v1/tasks', router)
app.use(notFound)

const start = async ()=>{
    try {
        await db_connect(process.env.DB_URL)
        app.listen(PORT, ()=>{console.log(`APP IS LISTENING ON PORT ${PORT}`)})
    } catch (err) {
        console.log(err)
    }
}

start()
// app.listen(PORT, console.log(`server is running on port ${PORT}`))