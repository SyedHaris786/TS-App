import * as express from 'express';
import { auth } from '../middleware/authValidation';
import { product, allProducts, addProduct, updateProduct } from '../controller/products';
import { presignedURL } from "../utilities/s3"
const router = express.Router();



// Get products Routes
router.route('/product/:id').get(auth, product)
router.route('/products').get(auth, allProducts)


//For Adding a product
router.route("/singnedurl").get(presignedURL)
router.route('/product/').post(addProduct);

//Updating a Product
router.route('/product/update').post(updateProduct)

module.exports = router