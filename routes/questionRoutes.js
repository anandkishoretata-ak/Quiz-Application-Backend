import express from "express";

import {
  getQuestions,
  seedQuestions,
} from "../controllers/questionController.js";

const router = express.Router();

// Get Questions
router.get("/", getQuestions);

// Seed Questions
router.post("/seed", seedQuestions);

export default router;