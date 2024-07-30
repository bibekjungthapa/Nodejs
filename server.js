
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { dbConnect } from "./mongo/dbConnection.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(morgan("combined"));
import taskRoute from "./routes/task.route.js";

dbConnect();

app.use("/task", taskRoute);

app.listen(process.env.PORT, () => {
  console.log("Server connected successfully"); 
});

