var Person = /** @class */ (function () {
    function Person(first, last, age) {
        console.log('constructur run ...');
        this.FN = first;
        this.LN = last;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log(this.FN + ' says hello');
    };
    return Person;
}());
var amira = new Person('amira', 'chebbi', 22);
console.log(amira.age);
amira.sayHello();
var kevi = new Person('kevin', 'williams', 40);
kevi.sayHello();
