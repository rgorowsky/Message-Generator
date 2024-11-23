"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var methods_1 = require("./methods");
var MessageBuilder = /** @class */ (function () {
    function MessageBuilder() {
        this.timeMethods = new methods_1.TimeMethods();
    }
    MessageBuilder.prototype.buildMessage = function () {
        var timeOfDay = this.timeMethods.timeOfDay();
        return "Good ".concat(timeOfDay, ", valued Guest!");
    };
    return MessageBuilder;
}());
var messageBuilder = new MessageBuilder();
console.log(messageBuilder.buildMessage());
