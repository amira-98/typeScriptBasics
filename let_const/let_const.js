var a = 55;
console.log(a);
function showVar() {
    var a = 55;
    if (true) {
        var a = 44;
        console.log(a);
    }
    console.log(a);
}
showVar();
function showLet() {
    var a = 66;
    if (true) {
        var a_1 = 77;
        console.log(a_1);
    }
    console.log(a);
}
showLet();
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
var colors = [];
colors.push("red");
colors.push("blue");
colors.push("green");
console.log(colors);
