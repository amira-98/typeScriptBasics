class Person 
{
    FN: string ;
    LN: string ; 
    age : number ; 
    constructor(first:string,last:string,age:number)
    {
       console.log('constructur run ...');
       this.FN=first;
       this.LN=last;
       this.age=age;
    }
    sayHello()
    {
        console.log(this.FN +' says hello');
    }

}

let amira= new Person('amira','chebbi',22);
console.log(amira.age);
amira.sayHello();
let kevi= new Person('kevin','williams',40);
kevi.sayHello();