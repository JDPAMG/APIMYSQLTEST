import { Router } from 'express'
import { haceping } from '../controllers/index.controllers.js';


const router = Router()

router.get("/ping",haceping );

export default router