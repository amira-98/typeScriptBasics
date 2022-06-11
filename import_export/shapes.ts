import {ShapesInterface} from './shapes_interface'
export class Triangle implements ShapesInterface
{
    points: number;
    getPoints()
    {
        
        console.log(`a triangle has ${this.points} points`);
        return this.points;
    }

    setPoints(points:number)
    {
        this.points=points;
    }
}