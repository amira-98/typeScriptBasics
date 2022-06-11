////////Patterns
/*const User =
{
    first:'Amira' ,
    last : 'Chebbi'
}

const{first,last} = User;

console.log(first + ' ' + last);

const users = ['mark' , 'amira','carlos'];
const [user1,user2,user3]=users;
console.log(user2);
const [a,b]=['x','y'];
console.log(a);*/
var obj = {
    a: [
        { foo: 123, bar: 'abc' }, {}
    ],
    b: true
};
//const {a: [{bar:b}]}=obj;
var foo = obj.b;
console.log(foo);
var obj2 = { x: 12, y: 23 };
var o = obj2.x;
console.log(o);
