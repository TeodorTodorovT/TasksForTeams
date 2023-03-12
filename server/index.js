import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import employeesRoutes from './routes/employees.js';
import tasksRoutes from "./routes/tasks.js";

const app = express();
dotenv.config();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.send("Welcome TasksForTeams API")
});

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.CONNECTION_URL, {useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`)))
    .catch((error) => console.log(error.massage));

app.use('/employees', employeesRoutes);

app.use('/tasks', tasksRoutes);



