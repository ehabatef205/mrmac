const order_details_router = require('./api/order_details')
const cart_items_router = require('./api/cart_items')
const order_items_router = require('./api/order_items')
const payment_details_router = require('./api/payment_details')
const product_router=require('./api/product')
const product_category_router=require('./api/product_category')
const product_inventory_router=require('./api/product_inventory')
const discount_router=require('./api/discount')
const UserRoute = require('./api/UserRouter')
const ImageRoute = require('./api/image_route')
const UserAddressRoute = require('./api/UserAddressRouter')
const UserPaymentRoute = require('./api/UserPaymentRouter')
const {Router} = require('express')

const router = Router()

router.use('/order_details',order_details_router)
router.use('/images', ImageRoute)
router.use('/cart_items',cart_items_router)
router.use('/order_items',order_items_router)
router.use('/payment_details',payment_details_router)
router.use('/product',product_router)
router.use('/product_category',product_category_router)
router.use('/product_inventory',product_inventory_router)
router.use('/discount',discount_router)
router.use('/user', UserRoute)
router.use('/user-address', UserAddressRoute)
router.use('/user-payment', UserPaymentRoute)

module.exports = router