import urlModel from '../models/urlModel.js'

const get = async () => {
    return urlModel.find().lean()
}

const getByShortUrl = async (shortUrl) => {
    return urlModel.findOne({ shortUrl: shortUrl }).lean()
}

const createShortUrl = async (urlObj) => {
    console.log(urlObj)
    const newUrl = new urlModel(urlObj)
    return newUrl.save({ new: true })
}

export default { get, getByShortUrl, createShortUrl }