import express from "express"
import mongoose from "mongoose"
// import User from "./mongoose/User.js"
import router from "./router/users.js"

const app = express()

mongoose.connect("mongodb://localhost:27017/testdb",{useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>app.listen(5000,()=>console.log(`Server started on port 5000`)))
    .catch(error=>console.log(error.message))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/users", router)

// const user = new User({
//     name: "Daniel",
//     age: 26,
//     gender: "Male"
// })

// user.save().then(()=>console.log("Saved!!")).catch((e)=>console.log(e.message))

// User.find().then(result=>console.log(result)).catch(e=>console.log(e.message))


