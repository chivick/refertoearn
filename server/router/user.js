import express from 'express'
import { addNewUser, login, welcomePage, verifyRef, getUserDetails } from '../controller/user.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', welcomePage)

// Add new user
router.post('/verifyRef', verifyRef)
router.post('/new', addNewUser)

// User login
router.post('/login', login)

// Get user's details
router.get('/details', auth, getUserDetails)

export default router