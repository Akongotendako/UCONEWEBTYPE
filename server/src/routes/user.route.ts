import express from 'express';
import { fetchProfile, fetchUsers, signIn, signUp, updateProfile } from '../controllers/user.controller.js';
import multer from 'multer'

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({storage: storage})

router.post("/", signUp);
router.post("/sign-in", signIn);
router.get("/:userId", fetchProfile);
router.post("/:userId/update-profile", upload.single("profilePic"), updateProfile);
router.get("/", fetchUsers)

export default router;