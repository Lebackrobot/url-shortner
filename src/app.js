import express from 'express'
import config from './config/env.js'
import db from './db/dbConnect.js'
import cors from 'cors'

import noauthRoutes from './routes/noauth/index.js'

const app = express() 

// Import routers section
app.use(express.json({ limit: '100mb '}))
app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.use(cors())

// Set server port 
app.set('port', config.port)

// Connect to database 
db.on('error', err => { console.error(`Connection error ${err}`)})
db.once('open', () => console.log('Success to connection on db'))

app.use('/noauth', noauthRoutes)

export default app