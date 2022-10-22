import express, { Application } from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

const server: Application = express()

server.listen(process.env.PORT, () => console.log(`API is listening on ${process.env.PORT}`))
