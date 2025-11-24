import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import {
  getDefaultTemplate,
  createTemplate
} from "../controllers/templateController.js";

const router = express.Router();

router.get("/default", authMiddleware, getDefaultTemplate);
router.post("/", authMiddleware, createTemplate);

export default router;
