let greet='Hello world';
let num1 = 5 ;
let num2=3;
let total=  (num1:number,num2number):number => num1+num2;
let template=`${greet} ,this is my template 
in Typescript. ${num1} + ${num2} = ${total(num1,num2)}`;
console.log(template);

console.log(template.startsWith('Hello1'));
console.log(template.endsWith('8'));
console.log(template.includes('this is'));