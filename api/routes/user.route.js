import express from "express";
import { test, profile } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);
router.get("/profile", profile);

export default router;
