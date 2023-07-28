import express from 'express'
import urlController from '../../controllers/urlController.js'

const router = express.Router() 

router.get('/', urlController.get)
router.get('/:shortUrl', urlController.getByShortUrl)
router.post('/', urlController.createShortUrl)

export default router