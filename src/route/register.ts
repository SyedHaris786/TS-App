import * as express from 'express'
import { auth } from '../controller/register';

const router = express.Router();



// router.post('/auth',auth)
router.post('/register', auth);


export default router