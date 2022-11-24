import { Request, Response } from 'express'

export const getAllLists = (req: Request, res: Response) => {
  return res.json({ message: 'Get all lists controller' })
}

export const getList = (req: Request, res: Response) => {
  return res.json({ message: 'Get a list controller' })
}

export const createList = (req: Request, res: Response) => {
  return res.json({ message: 'Create a list controller' })
}

export const updateList = (req: Request, res: Response) => {
  return res.json({ message: 'Update a list controller' })
}

export const deleteList = (req: Request, res: Response) => {
  return res.json({ message: 'Delete a list controller' })
}
