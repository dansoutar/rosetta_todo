import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { db } from '../database'

import { createToken } from '../lib/createToken'

export const registerUser = (req: Request, res: Response) => {
  const { username, password } = req.body

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      db('users')
        .insert({ name: username, password: hash })
        .then(() => {
          res.status(200).json('User Created')
        })
    })
    .catch((err) => {
      res.status(400).json({ message: err })
    })
}

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body

  const dbUser = await db('users')
    .where({ name: username })
    .select()
    .then((result) => result[0])

  if (!dbUser) return res.status(400).json({ message: 'User does not exist' })

  bcrypt.compare(password, dbUser.password).then((match) => {
    if (!match) return res.status(400).json({ message: 'Wrong Credentials' })

    const accessToken = createToken(dbUser)
    res.cookie('access-token', accessToken)

    return res.status(400).json({ message: 'Logged in!' })
  })
}

export const logoutUser = (req: Request, res: Response) => {
  return res.json({ message: 'logout user controller' })
}
