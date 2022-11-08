import * as express from 'express'
import { baseRoutController } from './controller/auth'
import {products } from './controller/products'

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
    // this.mountMiddleware()
  }

  private mountRoutes (): void {
    const router = express.Router()

   
router.route('/').get(baseRoutController)


router.route('/products').get(products)
   

    this.express.use('/', router) 
  }

}
export default new App().express