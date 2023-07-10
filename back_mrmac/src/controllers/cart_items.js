const Cart_items = require('../models/Cart_items')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require("dotenv").config();

module.exports.Create_cart_item = async (req, res) => {
    const usertoken = req.headers.authorization;
    const token = usertoken.split(' ');
    const decoded = jwt.verify(token[1], process.env.JWT_KEY);
    const id = decoded.id;

    const cart_item = req.body

    const isNewCart = await Cart_items.isThisCart(cart_item.product_id, id)
    if(!isNewCart){
        return res.json({
            message: 'This product is already in cart'
        })
    }

    await add_cart_item(cart_item, id).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log('err',err)
        return res.status(401).json(err)
    })
}

const add_cart_item = async ({product_id, quantity}, id) => {
    const newCart_item = new Cart_items({
        user_id: id,
        product_id,
        quantity
    })
    await newCart_item.save()
    return newCart_item
}

module.exports.Read_cart_item = async (req, res) => {
    const _id = new mongoose.Types.ObjectId(req.params.id);
    await Cart_items.findById(_id).then(e => {
        if(!e){
            return res.status(404).json({error:"cart item not found"})
        }
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}

module.exports.Read_cart_items = async (req, res) => {
    const usertoken = req.headers.authorization;
    const token = usertoken.split(' ');
    const decoded = jwt.verify(token[1], process.env.JWT_KEY);
    const id = decoded.id;
    console.log(id)

    await Cart_items.find({user_id: id}).then(e =>{
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}

module.exports.Delete_cart_item = async (req, res) => {
    const _id = new mongoose.Types.ObjectId(req.params.id)
    const oi = await Cart_items.findById(_id)
    if(!oi){
        return res.status(404).json({error:'can\'t delete cart item not found'})
    }
    await Cart_items.findByIdAndDelete(_id).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}

module.exports.Update_cart_item = async (req, res) => {
    const _id = new mongoose.Types.ObjectId(req.params.id)
    const cart_item = req.body
    const oi = await Cart_items.findById(_id)
    if(!oi){
        return res.status(404).json({error:'can\'t update cart item not found'})
    }
    await Cart_items.findByIdAndUpdate(_id,cart_item,{new:true}).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}