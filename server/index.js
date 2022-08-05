import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRouter from './router/user.js'

const app = express()

const PORT = process.env.PORT || 5000
const CONNECTION_URL = 'mongodb://localhost/usersdb'

mongoose.connect(CONNECTION_URL).catch(e => console.log(e)).then(() => {
    app.listen(PORT, () => {
        console.log(`Sever is running on port ${PORT}`)
    })
})


app.get('/', (req, res) => {
    res.send('Welcome to ReferToEarn server.')
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/users', userRouter)
