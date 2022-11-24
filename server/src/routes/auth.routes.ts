import { Router } from 'express'
import { registerUser, loginUser, logoutUser } from '../controllers/auth.controllers'

export const authRouter = Router()

authRouter.post('/register', registerUser)

authRouter.post('/login', loginUser)

authRouter.post('/logout', logoutUser)
