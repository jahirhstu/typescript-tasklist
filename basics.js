"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People = /** @class */ (function () {
    function People(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    People.prototype.get_name = function () {
        return this.first_name + " " + this.last_name;
    };
    return People;
}());
exports.People = People;
