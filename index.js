"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_service_1 = require("./service/task_service");
var task_status_1 = require("./enums/task_status");
//import * as _ from 'lodash'
// let people = new People('Rehan', 'Islam');
// let full_name = people.get_name();
// console.log(full_name);
// let array = [1, 2, 3]
// let reverse_array = _.reverse(array);
// console.log(reverse_array)
var taskService = new task_service_1.TaskService();
taskService.Create('learn typescript');
taskService.Create('learn nodejs', 'A course to learn nodejs', new Date('2018/01/05'));
taskService.Create('typescript video', 'Video course to learn typescript');
taskService.Create('django video', 'Video course to learn django');
taskService.Create('python video', 'Video course to learn python');
//console.log(taskService.AllTasks());
taskService.Update(2, task_status_1.TaskStatus.InProgress);
taskService.Update(5, task_status_1.TaskStatus.Completed);
taskService.Delete(1);
//console.log('After update & delete');
//console.log(taskService.AllTasks());
console.log(taskService.CompletedTasks());
