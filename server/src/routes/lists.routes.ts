import { Router } from 'express'
import { getAllLists, getList, createList, updateList, deleteList } from '../controllers/lists.controllers'

export const listRouter = Router()

listRouter.get('/', getAllLists)

listRouter.get('/:id', getList)

listRouter.post('/', createList)

listRouter.patch('/:id', updateList)

listRouter.delete('/:id', deleteList)
