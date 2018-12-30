"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var task_1 = require("../models/task");
var _ = __importStar(require("lodash"));
var task_status_1 = require("../enums/task_status");
var TaskService = /** @class */ (function () {
    function TaskService() {
        this.tasks = [];
    }
    TaskService.prototype.generateTaskId = function () {
        var latestTask = _.maxBy(this.tasks, 'id');
        return latestTask ? latestTask.id + 1 : 1;
    };
    TaskService.prototype.Create = function (heading, description, dueDate) {
        if (description === void 0) { description = heading; }
        if (dueDate === void 0) { dueDate = new Date(); }
        var newTask = new task_1.Task(heading, description);
        var taskId = this.generateTaskId();
        newTask.id = taskId;
        newTask.dueDate = dueDate;
        newTask.status = task_status_1.TaskStatus.Pending;
        this.tasks.push(newTask);
        return newTask;
    };
    TaskService.prototype.Update = function (id, status) {
        var task = _.find(this.tasks, ['id', id]);
        if (task) {
            task.status = status;
            return true;
        }
        return false;
    };
    TaskService.prototype.Delete = function (id) {
        var taskIndex = _.findIndex(this.tasks, ['id', id]);
        _.pullAt(this.tasks, taskIndex);
        return true;
    };
    TaskService.prototype.AllTasks = function () {
        return this.tasks;
    };
    TaskService.prototype.ToDoTasks = function () {
        return _.filter(this.tasks, ['status', task_status_1.TaskStatus.Pending]);
    };
    TaskService.prototype.InProgressTasks = function () {
        return _.filter(this.tasks, ['status', task_status_1.TaskStatus.InProgress]);
    };
    TaskService.prototype.CompletedTasks = function () {
        return _.filter(this.tasks, ['status', task_status_1.TaskStatus.Completed]);
    };
    return TaskService;
}());
exports.TaskService = TaskService;
