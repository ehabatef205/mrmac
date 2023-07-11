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

module.exports.CreateImage = async (req, res, next) => {
    let body = req.body

    let image = new Image({
        image: body.image,
        category_id: body.category_id,
    })
    image.save()
    .then(response => {
        res.json({
        response
        })
    })
    .catch(error => {
        console.log(error)
        res.json({
            message: 'An error Occured!'
        })
    })
}