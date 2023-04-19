import { Router, Request, Response } from "express";
import { TasksController } from "./tasks.controller";

export const tasksRouter: Router = Router();

tasksRouter.get("/", async (req: Request, res: Response) => {
  const taskController = new TasksController();
  try {
    const allTasks = await taskController.getAllTasks();
    res.status(200).json(allTasks);
  } catch (err) {
    console.log("Task router get all tasks", err);
  }
});
