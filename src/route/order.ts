import * as express from 'express'
import { order } from '../controller/order';


const router = express.Router();



router.post('/order', order);


module.exports = router