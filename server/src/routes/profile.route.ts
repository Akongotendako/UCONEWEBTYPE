import express from 'express'
import { fetchProfile } from '../controllers/profile.controller.js';

const router = express.Router();

router.get("/:userId", fetchProfile);

export default router;