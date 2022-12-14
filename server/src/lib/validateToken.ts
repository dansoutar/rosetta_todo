import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IRequest extends Request {
  user?: any
}

export const validateToken = async (req: IRequest, res: Response, next: NextFunction) => {
  const accessToken = req.header('authorization')

  if (!accessToken) return res.status(400).json({ message: 'User is not authenticated!' })
  if (!process.env.SUPER_SECRET_KEY) throw new Error('Error: No secret key available to verify token')

  try {
    const validToken = verify(accessToken, process.env.SUPER_SECRET_KEY)

    if (validToken) {
      req.user = validToken
      return next()
    }
  } catch (error) {
    return res.status(400).json({ error })
  }
}
