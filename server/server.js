const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./src/config/connect')
const authRouter = require('./src/route/authRouter')
const userRouter = require('./src/route/userRouter')
require('./passport')

const app = express()
app.use(cors({
    origin: process.env.URL_CLIENT
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

connectDB()

const port = process.env.PORT || 8888
app.listen(port, () => {
    console.log('Server is running on port ' + port)
})