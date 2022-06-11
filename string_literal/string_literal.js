/////String Literals & Union Types
var x;
//x='Hello';
//x=undefined;
x = null;
console.log(x);
var y;
y = 'Hello world';
console.log(y);
var myAdd = function (z, y) {
    if (typeof z == 'string') {
        console.log(z);
        z = parseInt(z);
        console.log(z);
    }
    if (typeof y == 'string') {
        y = parseInt(y);
    }
    return z + y;
};
console.log(myAdd('4', 4));
function move(distance, direction) {
    console.log('Moving ' + distance + ' Miles ' + direction);
}
move(15, 'South');
