import mongoose from 'mongoose'
import moment from 'moment'
import config from '../config/env.js'

import { nanoid } from 'nanoid'

import urlService from '../services/urlService.js'

const _isValidId = (id) => {
    return mongoose.Types.ObjectId.isValid(id)
}


const get = async (req, res) => {
    try {
        const urls = await urlService.get()
        res.status(200).json({ success: true, data: urls, message: 'Success to get urls.'})
    }

    catch (err) {
        console.error(err)
        res.status(500).json({ success: false, message: 'Internal server error.'})
    }
}

const getByShortUrl = async (req, res) => {
    try {
        const { shortUrl } = req.params

        const url = await urlService.getByShortUrl(shortUrl)

        if(!url) {
            throw { status: 404, message: 'Not found url.' }
        }

        url.shortUrl = `${config.urlBase}/${url.shortUrl}`

        res.status(200).json({ sucess: true, data: url, message: 'Success to get url.'})
    }

    catch (err) {
        console.error(err)
        res.status(err.status || 500).json({ success: false, message: err.message || 'Interal server error.' })
    }
}

const createShortUrl = async (req, res) => {
    try {
        const { url } = req.body

        if (!url) {
            throw { status: 400, message: 'Internal server error'}
        }

        // Short url build params
        const shortUrl = nanoid(6)
        const endDate = moment().add(30, 'minutes')

        const newShortUrl = await urlService.createShortUrl({ url, shortUrl, endDate })
        newShortUrl.shortUrl = `${config.urlBase}/${newShortUrl.shortUrl}`

        res.status(201).json({ success: true, data: newShortUrl, message: 'Create new short url.' })

    }

    catch (err) {
        console.error(err)
        res.statis(err.status || 500).json({ success: false, message: err.message || 'Internal server error.' })
    }
}

export default { get, getByShortUrl, createShortUrl }