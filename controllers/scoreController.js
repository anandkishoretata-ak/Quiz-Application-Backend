import Score from "../models/Score.js";

// Save Quiz Result
export const saveScore = async (req, res) => {
  try {
    const { category, score, totalQuestions } = req.body;

    const newScore = await Score.create({
      user: req.user.id,
      category,
      score,
      totalQuestions,
    });

    res.status(201).json({
      message: "Score Saved Successfully",
      score: newScore,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Leaderboard
export const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Score.find()
      .populate("user", "name")
      .sort({ score: -1 })
      .limit(10);

    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// User Score History
export const getMyScores = async (req, res) => {
  try {
    const scores = await Score.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(scores);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};