import { Router } from 'express'

import { updateUser, getUser, deleteUser } from '../controllers/user.controllers'
import { validateToken } from '../lib/validateToken'

export const userRouter = Router()

userRouter.get('/', validateToken, getUser)

userRouter.patch('/:id', updateUser)

userRouter.delete('/:id', deleteUser)
