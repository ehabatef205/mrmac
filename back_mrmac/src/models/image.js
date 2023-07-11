const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageschema = new Schema({
    image: {
        type: String
    },
    category_id: {
        type: String,
    }
}, { timeseries: true })

const Image = mongoose.model('image', imageschema)
module.exports = Image