import express from 'express';
import { checkEmail, checkUser, deleteUser, updateUser } from '../controllers/user.Controller.js';
import { verifyToken } from '../utils/verify.js';

const router = express.Router();

router.post('/update/:id', verifyToken, updateUser);

router.delete('/delete/:id', verifyToken, deleteUser);

router.post('/validateUsername/:id/:username', verifyToken, checkUser);

router.post('/validateEmail/:id/:email', verifyToken, checkEmail);

export default router;
