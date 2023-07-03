const { Schema, model,ObjectIdSchemaDefinition:ObjectId  } = require('mongoose')

const order_items_Schema = new Schema({
    user_id :{
        type:String,
    },
    product_id:{
        type:String,
    },
    quantity:{
        type:Number,
    }
},{timestamps:true})

module.exports = model.Cart_items || model("Order_items", order_items_Schema);
