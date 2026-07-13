const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors")

const app = express();

const allowedOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin : "http://localhost:5173",
  credentials : true
}))

/* require all the routes here*/
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes")

/*using all the routes here*/
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter)

module.exports = app;
