import express from 'express'
import { addNewUser, login, welcomePage } from '../controller/user.js'

const router = express.Router()

router.get('/', welcomePage)

// Add new user
router.post('/new', addNewUser)

// User login
router.post('/login', login)

export default router