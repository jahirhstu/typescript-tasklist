//import {People} from './basics'
import { Task } from './models/task'
import { TaskService } from './service/task_service'
import { ITaskService } from './service/i_task_service'
import { TaskStatus } from './enums/task_status';
//import * as _ from 'lodash'

// let people = new People('Rehan', 'Islam');
// let full_name = people.get_name();
// console.log(full_name);

// let array = [1, 2, 3]
// let reverse_array = _.reverse(array);
// console.log(reverse_array)

let taskService: ITaskService = new TaskService();
taskService.Create('learn typescript');
taskService.Create('learn nodejs', 'A course to learn nodejs', new Date('2018/01/05'));
taskService.Create('typescript video', 'Video course to learn typescript');
taskService.Create('django video', 'Video course to learn django');
taskService.Create('python video', 'Video course to learn python');
//console.log(taskService.AllTasks());
taskService.Update(2, TaskStatus.InProgress);
taskService.Update(5, TaskStatus.Completed);
taskService.Delete(1);
//console.log('After update & delete');
//console.log(taskService.AllTasks());
console.log(taskService.CompletedTasks());