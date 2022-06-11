var getUser = function (name) {
    return name;
};
var getUser2 = function (name) { return name; };
console.log(getUser('Amira Chebbi'));
console.log(getUser2('Amira chebbi'));
var add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(1, 3));
var Add2 = function (num1, num2) { return num1 + num2; };
console.log(Add2(1, 3));
var User = {
    name: 'Amira', age: 22,
    startAging: function () {
        var self = this;
        setInterval(function () {
            self.age++;
            console.log(self.age);
        }, 4000);
    }
};
var User2 = {
    name: 'Amira', age: 22,
    startAging: function () {
        // don't need to use var self = this
        setInterval(function () {
            this.age++;
            console.log(this.age);
        }, 1000);
    }
};
var amira = Object.create(User);
amira.startAging();
