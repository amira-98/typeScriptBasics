class Person{
    name:string;
    constructor(name:string)
    {
        this.name=name;
        console.log(`Persone created ${this.name}`);
    }
    sayHello()
    {
        console.log(`${this.name} says hello`);
    }
}

class Customer extends Person{
    id :number;
    constructor(id:number,name:string)
    {
        super(name);
        this.id=id;
        console.log(`customer created ${this.name}`);
    }

    payBalance()
    {
        console.log(`customer ${this.id} has paid their balance`);
    }
}

let joe=new Person('Joe');
joe.sayHello();
let mary : Customer= new Customer(1,'Mary');
console.log(mary);
mary.payBalance();