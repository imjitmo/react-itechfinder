import express from 'express';
import { ownerSetup, showShop } from '../controllers/owner.Controller.js';
import { verifyToken } from '../utils/verify.js';

const router = express.Router();

router.post('/setup/:id/:username', verifyToken, ownerSetup);

router.get('/shop/:id', verifyToken, showShop);

export default router;
