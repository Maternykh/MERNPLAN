import express from "express";
import mongoose from "mongoose";
import dayRouter from "./routes/dayRoute.js";
import cors from "cors";
import { PORT, mongoDBUrl } from "./config.js";
import purpRouter from "./routes/purpRoute.js";
import userRouter from "./routes/userRoute.js";
import patternRouter from "./routes/patternRoute.js";
const app = express();
app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );
app.get("/", (req, res) => {
  return res.status(234).send("Welcome MERN stack database!");
});
app.use("/days", dayRouter);
app.use("/purp", purpRouter);
app.use("/auth", userRouter);
app.use("/pattern", patternRouter);
mongoose
  .connect(mongoDBUrl)
  .then(() => {
    console.log("App connection to database");
    app.listen(PORT, () => {
      console.log(`App listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
