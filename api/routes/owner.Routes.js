import express from 'express';
import { ownerSetup, showShop, viewActiveShop } from '../controllers/owner.Controller.js';
import { verifyAdmin, verifyToken } from '../utils/verify.js';

const router = express.Router();

router.post('/setup/:id/:username', verifyToken, ownerSetup);

router.get('/shop/:id', verifyToken, showShop);

router.get('/active', verifyToken, viewActiveShop);

export default router;
