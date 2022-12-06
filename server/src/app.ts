import express, { Application } from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import { userRouter } from './routes/user.routes'
import { authRouter } from './routes/auth.routes'
import { listRouter } from './routes/list.routes'
import { itemRouter } from './routes/item.routes'

dotenv.config()

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/list', listRouter)
app.use('/api/list/:list_id/item', itemRouter)

app.listen(process.env.PORT, () => console.log(`API is listening on ${process.env.PORT}`))
