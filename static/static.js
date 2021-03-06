var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calcDist = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid = new Grid(1.0);
console.log(grid.calcDist({ x: 10, y: 10 }));
var grid2 = new Grid(5.0);
console.log(grid2.calcDist({ x: 10, y: 10 }));
