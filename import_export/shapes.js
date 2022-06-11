"use strict";
exports.__esModule = true;
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.getPoints = function () {
        console.log("a triangle has " + this.points + " points");
        return this.points;
    };
    Triangle.prototype.setPoints = function (points) {
        this.points = points;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
