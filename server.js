import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());

// Routes

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/scores",
  scoreRoutes
);

app.use(
  "/api/questions",
  questionRoutes
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message:
      "Quiz Master Backend Running Successfully",
  });
});

mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => {
    console.log(
      "MongoDB Connected"
    );

    app.listen(
      process.env.PORT ||
        5000,
      () => {
        console.log(
          `Server Running On Port ${
            process.env.PORT ||
            5000
          }`
        );
      }
    );
  })
  .catch((error) => {
    console.log(
      error.message
    );
  });