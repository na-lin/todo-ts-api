import { AppDataSource } from "../..";
import { Task } from "./tasks.entity";
import { instanceToPlain } from "class-transformer";

export class TasksController {
  constructor(private taskRepository = AppDataSource.getRepository(Task)) {}

  public async getAllTasks(): Promise<Task[]> {
    // declare a variable to hold all tasks
    let allTasks: Task[];
    try {
      // fetch all task using the repository
      allTasks = await this.taskRepository.find({
        order: {
          date: "ASC",
        },
      });
      console.log(allTasks);
      // convert the task instance to an array of object
      allTasks = instanceToPlain(allTasks) as Task[];
      return allTasks;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
