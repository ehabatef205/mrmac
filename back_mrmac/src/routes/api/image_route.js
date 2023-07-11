const {Router} = require('express')
const image_controller = require('../../controllers/imageController')

const router = Router()

router.get('/',image_controller.AllImage)
router.post('/',image_controller.CreateImage)

module.exports = router