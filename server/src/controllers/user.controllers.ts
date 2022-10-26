import { Request, Response } from 'express'

export const registerUser = (req: Request, res: Response) => {
  return res.json({ message: 'register user controller' })
}

export const loginUser = (req: Request, res: Response) => {
  return res.json({ message: 'login user controller' })
}

export const logoutUser = (req: Request, res: Response) => {
  return res.json({ message: 'logout user controller' })
}

export const updateUser = (req: Request, res: Response) => {
  return res.json({ message: 'update user controller' })
}

export const deleteUser = (req: Request, res: Response) => {
  return res.json({ message: 'delete user  controller' })
}
