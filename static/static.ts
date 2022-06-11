class Grid {

    static origin = { x:0 , y:0};
    calcDist(point: { x:number , y:number})

    {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist)/this.scale;


    }

    constructor(public scale :number)
    {

    }
}

let grid=new Grid(1.0);
console.log(grid.calcDist({x:10,y:10}));
let grid2=new Grid(5.0);
console.log(grid2.calcDist({x:10,y:10}));

