import { Task } from '../models/task'
import { TaskStatus } from '../enums/task_status';

export interface ITaskService {
    Create(heading: string, description?: string, dueDate?: Date): Task;
    Update(id: number, status: TaskStatus): boolean;
    Delete(id: number): boolean;
    AllTasks(): Task[];
    ToDoTasks(): Task[];
    InProgressTasks(): Task[];
    CompletedTasks(): Task[];
}