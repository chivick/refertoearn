import perma from 'perma'
import UserModel from "../model/user.js"

export const welcomePage = (req, res) => { 
    res.send('This is user route.')
}

export const addNewUser = async (req, res) => {

    try {

        const { fullName, email, password, referrer } = req.body
    
        const userDetails = { fullName, email, password, referrer }
    
        const newUser = await UserModel.create(userDetails)

        newUser.refID = perma(newUser._id, 6)

        const data = await newUser.save()

        res.json(data)
    
    } catch (error) {
        res.status(400).json({ message: error.message })
    }    
}

export const login = async (req, res) => {

    try {

        const { email, password } = req.body

        const user = await UserModel.findOne({ email })

        if(user) {
            if(password === user.password) {
                res.json(user)
            } else {
                res.status(404).json({ message: 'Invalid credentials'})
            }
        } else {
            res.status(404).json({ message: 'Invalid credentials'})
        }
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}