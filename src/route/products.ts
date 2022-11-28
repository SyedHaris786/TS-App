import * as express from 'express'
import { auth } from '../middleware/authValidation';
import { product, allproducts } from '../controller/products'

const router = express.Router();



// Select Routes
router.route('/product/:id').get(auth, product)
router.route('/products').get(auth, allproducts)



module.exports = router