import express from 'express'
import urlShortRouter from './shortUrl.js'

const router = express.Router()

router.use('/shorten-url', urlShortRouter)

export default router