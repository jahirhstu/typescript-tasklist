import { ITaskService } from '../service/i_task_service'
import { Task } from '../models/task'
import * as _ from 'lodash'
import { TaskStatus } from '../enums/task_status';

export class TaskService implements ITaskService {
    private tasks: Task[] = [];

    private generateTaskId(): number {
        let latestTask: Task | undefined = _.maxBy(this.tasks, 'id');
        return latestTask ? latestTask.id + 1 : 1;
    }

    Create(heading: string, description: string = heading, dueDate: Date = new Date()): Task {
        let newTask: Task = new Task(heading, description);
        let taskId: number = this.generateTaskId();
        newTask.id = taskId;
        newTask.dueDate = dueDate;
        newTask.status = TaskStatus.Pending;
        this.tasks.push(newTask);
        return newTask;
    }

    Update(id: number, status: TaskStatus): boolean {
        let task: Task | undefined = _.find(this.tasks, ['id', id]);
        if (task) {
            task.status = status;
            return true;
        }
        return false;
    }

    Delete(id: number): boolean {
        let taskIndex: number = _.findIndex(this.tasks, ['id', id]);
        _.pullAt(this.tasks, taskIndex)
        return true;
    }
    AllTasks(): Task[] {
        return this.tasks;
    }
    ToDoTasks(): Task[] {
        return _.filter(this.tasks, ['status', TaskStatus.Pending]);
    }
    InProgressTasks(): Task[] {
        return _.filter(this.tasks, ['status', TaskStatus.InProgress]);
    }
    CompletedTasks(): Task[] {
        return _.filter(this.tasks, ['status', TaskStatus.Completed]);
    }
}