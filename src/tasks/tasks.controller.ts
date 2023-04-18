import { Task } from "./tasks.entity";
import { AppDataSource } from "../..";
export class TasksController {
  constructor(private taskRepository = AppDataSource.getRepository(Task)) {}

  public async getAllTasks(): Promise<Task[]> {}
}
