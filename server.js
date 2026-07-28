import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { dbConnect } from './mongo/dbConnection.js';
import taskRoute from './routes/task.route.js';
import authRoute from "./routes/auth.route.js";

import cors from "cors";
const app = express();
dotenv.config();
app.use(express.json());
app.use(morgan('combined'));

dbConnect();


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));


app.use("/api/v1/auth", authRoute);
app.use('/api/v1/task', taskRoute);

app.listen(process.env.PORT, () => {
  console.log('Server Connected Successfully');
});
