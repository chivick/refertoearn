import express from 'express'
import mongoose from 'mongoose'
import Hashids from 'hashids'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const CONNECTION_URL = 'mongodb://localhost/usersdb'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL).then(
    app.listen(PORT, () => {
        console.log(`Connected to database and server running on port ${PORT}`)
    })
).catch(error => console.log(error.message))

