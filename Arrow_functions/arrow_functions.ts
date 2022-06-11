let getUser=function(name):string{
    return name;
}

let getUser2 = (name) :string => 
{return name};
console.log(getUser('Amira Chebbi'));
console.log(getUser2('Amira chebbi'));

let add = function(num1:number,num2:number):number
{
    return num1+num2;
}

console.log(add(1,3));

let Add2 = (num1,num2):number => num1+num2;
console.log(Add2(1,3));

var User = {
    name:'Amira',age:22,
    startAging: function()
    {
        var self=this;
        setInterval(function()
        {
            self.age++;
            console.log(self.age);
        },4000);
    }
}
var User2 = {
    name:'Amira',age:22,
    startAging: ()=>
    {
       // don't need to use var self = this
        setInterval(function()
        {
            this.age++;
            console.log(this.age);
        },1000);
    }
}

var amira = Object.create(User);
amira.startAging();