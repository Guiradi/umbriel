import { config } from 'dotenv-flow'
import express from 'express'

config({ silent: true })

import { router } from './routes' // eslint-disable-line

const app = express()

app.use(
  express.json({
    type: ['application/json', 'text/plain'],
  })
)
app.use(router)

export { app }
