const Image = require('../models/image')
const mongoose = require('mongoose')


module.exports.AllImage = (req, res) => {
    Image.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}