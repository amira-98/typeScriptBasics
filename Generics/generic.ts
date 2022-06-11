function mystrictFuf(arg:number):number{
return arg;
}

function mystrimyanyFuncctFuf(arg:any):any{
    return arg;
    }

function myGeneric<T>(arg:T):T
{
    return arg;
}

let x=myGeneric<string>("Helllo");
console.log(x);
let y=myGeneric<number>(44);
console.log(y);


//Multiple Args

function myGeneric2<T1,T2>(arg1:T1,arg2:T2)
{
    let str=arg1+' '+arg2;
    return str;
}

let z=myGeneric2('hello',100);
console.log(z);
//////Arrays

function myGeneric3<T>(arg1:T[]):T[]
{
    console.log(arg1.length);
    return arg1;
}

let tab=[1,2,'number'];
let zz=myGeneric3(tab);
console.log(zz);

//Interfaces with generics
interface Genericfn
{
    <T> (arg:T):T;
}
function myGenric4<T>(arg:T):T
{ 
    return arg;
}
let gg:Genericfn=myGenric4;
console.log(gg('Hello'));
