const Product = require('../models/product.js')
const mongoose = require('mongoose')


module.exports.AllProducts = (req, res) => {
    Product.find()
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
module.exports.CreateProduct = async (req, res, next) => {
    const body = req.body

    const product = new Product({
            name: body.name,
            desc: body.desc,
            image: body.image,
            images: body.images,
            SKU:body.SKU,
            category_id: body.category_id,
            price:body.price,
            quantity:body.quantity
    })
    
    await product.save()
    .then(response => {
        res.json({
           response
        })
    })
    .catch(error => {
       
        res.json({
            message: error.message
        })
    })
}
module.exports.UpdateProduct = async (req, res) => {
    const body = req.body
    let _id = new mongoose.Types.ObjectId(req.params.id)
    await Product.findOneAndUpdate({_id:_id},body,{new:true}).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
      
        return res.json({message: "Error"})
    })
}
module.exports.DeleteProduct = async (req, res) => {
    let _id = new mongoose.Types.ObjectId(req.params.id)
    await Product.deleteOne({_id:_id}).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
      
        return res.json({message: "Error"})
    })
}
module.exports.getProduct = async (req, res) => {
    let _id = new mongoose.Types.ObjectId(req.params.id)
    
    await Product.findOne({_id:_id}).then(e => {
        res.header('Access-Control-Allow-Origin', '*');
        return res.json(e)
    }).catch(err => {
        return res.json({message: "Error"})
    })
}
module.exports.getbycat = async (req, res) => {
    let category_id = new mongoose.Types.ObjectId(req.params.category)
    res.header('Access-Control-Allow-Origin', '*');
    await Product.find({category_id:category_id}).then(e => {
        return res.json(e)
    }).catch(err => {
        return res.json({message: "Error"})
    })
}
module.exports.SearchByName = (req, res) => {
    Product.find({name:{ $regex: '.*' + req.body.query + '.*' }}).limit(6)
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