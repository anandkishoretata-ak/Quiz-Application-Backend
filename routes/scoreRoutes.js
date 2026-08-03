import express from "express";

import {
  saveScore,
  getLeaderboard,
  getMyScores,
} from "../controllers/scoreController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Save Quiz Score
router.post(
  "/save",
  protect,
  saveScore
);

// Leaderboard
router.get(
  "/leaderboard",
  getLeaderboard
);

// User Score History
router.get(
  "/my-scores",
  protect,
  getMyScores
);

export default router;