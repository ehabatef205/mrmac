const {Router} = require('express')
const image_controller = require('../../controllers/imageController')

const router = Router()

router.get('/',image_controller.AllImage)

module.exports = router