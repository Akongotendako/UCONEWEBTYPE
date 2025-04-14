import express from 'express';
import { signIn, signUp } from '../controllers/user.controller.js';

const router = express.Router();

router.post("/", signUp);
router.post("/sign-in", signIn)

export default router;