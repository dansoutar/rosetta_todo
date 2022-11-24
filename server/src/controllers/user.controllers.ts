import { Request, Response } from 'express'

export const updateUser = (req: Request, res: Response) => {
  return res.json({ message: 'update user controller' })
}

export const deleteUser = (req: Request, res: Response) => {
  return res.json({ message: 'delete user  controller' })
}
