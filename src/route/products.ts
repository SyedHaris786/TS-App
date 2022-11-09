import * as express from 'express'

import { baseRoutController } from '../controller/auth'
import {products } from '../controller/products'

const router = express.Router();

   
router.route('/').get(baseRoutController)
router.route('/products').get(products)


module.exports = router