import express from "express";
import multer from "multer";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProductByCategory,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.array("images", 6), addProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", upload.array("images", 6), updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:category", getProductByCategory);

export default router;
