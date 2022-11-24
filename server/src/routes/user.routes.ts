import { Router } from 'express'

import { updateUser, deleteUser } from '../controllers/user.controllers'

export const userRouter = Router()

userRouter.patch('/:id', updateUser)

userRouter.delete('/:id', deleteUser)
