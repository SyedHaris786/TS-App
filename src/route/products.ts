import * as express from 'express'


import { product, allproducts } from '../controller/products'

const router = express.Router();



router.route('/product/:id').get(product)
router.route('/products').get(allproducts)


module.exports = router