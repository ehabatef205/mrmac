const cart_items_router = require('./api/cart_items')
const order_items_router = require('./api/order_items')
const product_router=require('./api/product')
const product_category_router=require('./api/product_category')
const UserRoute = require('./api/UserRouter')
const ImageRoute = require('./api/image_route')
const {Router} = require('express')

const router = Router()

router.use('/images', ImageRoute)
router.use('/cart_items',cart_items_router)
router.use('/order_items',order_items_router)
router.use('/product',product_router)
router.use('/product_category',product_category_router)
router.use('/user', UserRoute)

module.exports = router