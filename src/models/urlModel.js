import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema({
    url: { type: String, required: true },
    shortUrl: { type: String, required: true },
    endDate: { type: Date, required: true }
})

export default mongoose.model('url', urlSchema)