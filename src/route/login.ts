import * as express from 'express'
import { login } from '../controller/login';


const router = express.Router();



router.post('/login', login);


export default router