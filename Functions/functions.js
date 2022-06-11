//////Functions
function add(x, y) { return x + y; }
console.log(add(5, 5));
var myAdd = function (z, y) {
    if (typeof z == 'string') {
        console.log(z);
        z = parseInt(z);
        console.log(z);
    }
    if (typeof y == 'string') {
        y = parseInt(y);
    }
    return z + y;
};
console.log(myAdd('55', 4));
function getFullname(FN, LN) {
    if (LN == undefined) {
        return FN;
    }
    else
        return FN + '   ' + LN;
}
var name1 = getFullname('Amira');
console.log(name1);
//////////////// Function with zu viel parameters
function getAllname(FN) {
    var restofName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restofName[_i - 1] = arguments[_i];
    }
    return FN + '  ' + restofName.join('  /');
}
var name2 = getAllname('Amira', 'chebbi', 'ooao', 'kjkd', 'jkd');
console.log(name2);
