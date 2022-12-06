import { Request, Response } from 'express'
import { validateToken } from '../lib/validateToken'

interface IRequest extends Request {
  user?: any
}

export const getUser = (req: IRequest, res: Response) => {
  return res.json({ message: 'update user controller', user: req.user })
}

export const updateUser = (req: Request, res: Response) => {
  return res.json({ message: 'update user controller' })
}

export const deleteUser = (req: Request, res: Response) => {
  return res.json({ message: 'delete user  controller' })
}
