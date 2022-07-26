import express from "express"
import User from "../mongoose/User.js"


const router = express.Router()

router.get("/",(req,res)=>{
    User.find().then(result=>res.json(result))
})

router.get("/:id",(req,res)=>{
    User.findById(req.params.id).then(result=>res.json(result))
})


export default router