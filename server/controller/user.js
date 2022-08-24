import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import perma from 'perma'

import UserModel from "../model/user.js"

export const welcomePage = (req, res) => { 
    res.send('This is user route.')
}

export const verifyRef = async (req, res) => {
    try {
        const { referrer } = req.body

        const checkReferrer = await UserModel.findOne({ refID: referrer })

        if(checkReferrer) {
            res.status(200).send('Valid')
        } else {
            res.status(400).send('Referrer ID does not exist.')
        }    

    } catch (error) {
        
    }
}

export const addNewUser = async (req, res) => {

    try {

        const { fullName, email, password, referrer } = req.body

        const existingUser = await UserModel.findOne({ email })

        if (existingUser) {
            throw new Error('Email is already registered')
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        
        const newUser = await UserModel.create({ fullName, email, password: hashedPassword, referrer })
        
        newUser.refID = perma(newUser._id, 6)
        
        const data = await newUser.save()
        
        if(referrer) {
            const checkReferrer = await UserModel.findOne({ refID: referrer })

            if(checkReferrer) {
                checkReferrer.unpaidReferrals += 1
                checkReferrer.totalReferrals += 1
    
                checkReferrer.unpaidEarnings += 10
                checkReferrer.totalEarnings += 10

                await checkReferrer.save()
            }
        }

        const token = jwt.sign({ id: data._id, email: data.email }, 'test', { expiresIn: '1h' })

        res.json({id: data._id, token })
    
    } catch (error) {
        res.status(400).send(error.message)
    }    
}

export const login = async (req, res) => {

    try {

        const { email, password } = req.body

        const user = await UserModel.findOne({ email })

        if(user) {
            const isPasswordCorrect = await bcrypt.compare(password, user.password)

            if(isPasswordCorrect) {

                const token = jwt.sign({ id: user._id, email: user.email }, 'test', { expiresIn: '1h' })

                res.json({id: user._id, token })

            } else {
                throw new Error('Invalid credentials.')
            }
        } else {
            throw new Error('Invalid credentials.')
        }
        
    } catch (error) {
        res.status(400).send(error.message)
    }

}

export const getUserDetails = async (req, res) => {

    try {
        const { userId } = req
    
        const user = await UserModel.findById(userId)

        const data = { ...user.toObject() }

        delete data.password

        res.json(data)
        
    } catch (error) {
        res.status(400).send("Something went wrong!")
    }


} 