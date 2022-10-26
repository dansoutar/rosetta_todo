import { Router } from 'express'

import { registerUser, loginUser, logoutUser, updateUser, deleteUser } from '../controllers/user.controllers'

export const userRouter = Router()

userRouter.post('/api/auth/register', registerUser)

userRouter.post('/api/auth/login', loginUser)

userRouter.post('/api/auth/logout', logoutUser)

userRouter.patch('/api/user/:id', updateUser)

userRouter.delete('/api/user/:id', deleteUser)
