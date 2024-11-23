"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeMethods = void 0;
var TimeMethods = /** @class */ (function () {
    function TimeMethods() {
    }
    TimeMethods.prototype.timeOfDay = function () {
        var dateTime = new Date();
        var hours = dateTime.getHours();
        var timeOfDay = '';
        if (hours < 12) {
            timeOfDay = 'Morning';
        }
        else if (hours > 18) {
            timeOfDay = 'Afternoon';
        }
        else {
            timeOfDay = 'Evening';
        }
        console.log("current time: ".concat(dateTime));
        return timeOfDay;
    };
    ;
    return TimeMethods;
}());
exports.TimeMethods = TimeMethods;
;
