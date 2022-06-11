/////////////////////Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Blue"] = 6] = "Blue";
    Color[Color["Green"] = 7] = "Green";
})(Color || (Color = {}));
var x = Color.Green;
console.log(x);
var Paylog;
(function (Paylog) {
    Paylog[Paylog["mon"] = 25.26] = "mon";
    Paylog[Paylog["tue"] = 25.33] = "tue";
    Paylog[Paylog["wed"] = 0] = "wed";
    Paylog[Paylog["thur"] = 100] = "thur";
    Paylog[Paylog["fr"] = 200] = "fr";
})(Paylog || (Paylog = {}));
var y = Paylog.mon + Paylog.tue + Paylog.thur + Paylog.wed + Paylog.fr;
console.log(y);
//////////////Any
var an;
an = 'Hello';
console.log(an);
an = 55;
console.log(an);
an = true;
console.log(an);
var tab;
tab = [1, 2, 3];
console.log(tab);
tab = ['hj', 'j'];
console.log(tab);
tab = ['hhhh', 'odjskcd', 555, 77];
console.log(tab);
var gen;
gen = [true, false, 5, 5, 5, 'jhjk', 'hkjh'];
