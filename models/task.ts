import { TaskStatus } from '../enums/task_status'

export class Task {
    public id: number = 0;
    public dueDate: Date = new Date();
    public status:TaskStatus = TaskStatus.None;
    constructor(
        public heading: string,
        public description: string) {
    }
}