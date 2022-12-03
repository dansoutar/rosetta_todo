import { sign, verify } from 'jsonwebtoken'

export const createToken = (user) => {
  if (!process.env.SUPER_SECRET_KEY) {
    throw new Error('Error: No secret key available to create token')
  }

  return sign(user, process.env.SUPER_SECRET_KEY)
}
