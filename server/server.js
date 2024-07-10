const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./src/config/connect')

const app = express()
app.use(cors({
    origin: process.env.URL_CLIENT
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', (req,res) => {
    res.send('Hello World!')
})
connectDB()

const port = process.env.PORT || 8888
app.listen(port, () => {
    console.log('Server is running on port ' + port)
})