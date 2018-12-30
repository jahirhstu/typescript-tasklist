"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_status_1 = require("../enums/task_status");
var Task = /** @class */ (function () {
    function Task(heading, description) {
        this.heading = heading;
        this.description = description;
        this.id = 0;
        this.dueDate = new Date();
        this.status = task_status_1.TaskStatus.None;
    }
    return Task;
}());
exports.Task = Task;
