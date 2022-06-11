function mystrictFuf(arg) {
    return arg;
}
function mystrimyanyFuncctFuf(arg) {
    return arg;
}
function myGeneric(arg) {
    return arg;
}
var x = myGeneric("Helllo");
console.log(x);
var y = myGeneric(44);
console.log(y);
//Multiple Args
function myGeneric2(arg1, arg2) {
    var str = arg1 + ' ' + arg2;
    return str;
}
var z = myGeneric2('hello', 100);
console.log(z);
//////Arrays
function myGeneric3(arg1) {
    console.log(arg1.length);
    return arg1;
}
var tab = [1, 2, 'number'];
var zz = myGeneric3(tab);
console.log(zz);
function myGenric4(arg) {
    return arg;
}
var gg = myGenric4;
console.log(gg('Hello'));
