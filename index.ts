import express, { Express } from "express";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import cors from "cors";
import { Task } from "./src/tasks/tasks.entity";
import { tasksRouter } from "./src/tasks/tasks.router";

const app: Express = express();
dotenv.config();

app.use(express.json());
app.use(cors());

// create Database Connection
export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
app.listen(process.env.PORT, () => {
  console.log("Listen on port 3001");
});

app.use("/tasks", tasksRouter);
