import express, { Application } from 'express'
import * as dotenv from 'dotenv'

import { userRouter } from './routes/user.routes'

dotenv.config()

const app: Application = express()

app.use('/', userRouter)

app.listen(process.env.PORT, () => console.log(`API is listening on ${process.env.PORT}`))
