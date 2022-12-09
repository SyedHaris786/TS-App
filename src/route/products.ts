import * as express from 'express'
import { auth } from '../middleware/authValidation';
import { product, allProducts, addProduct } from '../controller/products'

const router = express.Router();



// Select Routes
router.route('/product/:id').get(auth, product)
router.route('/products').get(auth, allProducts)

router.route('/product/').post(addProduct)

module.exports = router