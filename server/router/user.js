import express from 'express'
import { addNewUser } from '../controller/user'

const router = express.Router()

// Add new user
router.post('/new', addNewUser)

export default router