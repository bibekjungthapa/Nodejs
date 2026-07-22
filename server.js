import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { dbConnect } from "./mongo/dbConnection.js";
import taskRoute from "./routes/task.route.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(morgan("combined"));

dbConnect();

app.use("/api/v1/task", taskRoute);

app.listen(process.env.PORT, () => {
  console.log("Server Connected Successfully");
});
