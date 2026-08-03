import Question from "../models/Question.js";

export const getQuestions = async (
  req,
  res
) => {
  try {
    const { category } = req.query;

    const questions =
      await Question.find({
        category,
      });

    res.status(200).json(
      questions
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};