/////String Literals & Union Types
let x: 'Hello';
//x='Hello';
//x=undefined;
x=null;
console.log(x);

let y: 'Hello' | 'Hello world';
y='Hello world';
console.log(y);

let myAdd = function(z:string|number,y:string|number):number
{
    if(typeof z =='string')
    {
        console.log(z);

        z=parseInt(z);
        console.log(z);

    }
    if(typeof y =='string')
    {
        y=parseInt(y);

    }
    
    return z+y;
};
console.log(myAdd('4',4));

type cardinalDerction = 'North'| 'East' |'South' |'Weast';
function move(distance:number,direction:cardinalDerction)
{

    console.log('Moving '+distance+' Miles '+direction);
}

move(15,'South');