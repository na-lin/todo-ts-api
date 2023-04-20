import { Router, Request, Response } from "express";
import { TasksController } from "./tasks.controller";
import { createValidator } from "./tasks.validator";
import { validationResult } from "express-validator";

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

tasksRouter.post(
  "/",
  createValidator,
  //@ts-ignore
  async (req: Request, res: Response) => {
    // validate incoming request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  }
);
