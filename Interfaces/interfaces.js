function displayuser1(user) {
    console.log(user.FN + ' ' + user.LN);
}
var myuser = { FN: 'Amira', LN: 'chebbi' };
displayuser1(myuser);
;
var getuser;
getuser = function (name, age) {
    return ' the name is " ' + name + ' " the age is ' + age;
};
console.log(getuser('Amira', 22));
function displayuser2(user) {
    if (user.email) {
        if (user.type) {
            console.log(user.FN + ' ' + user.LN + ' ' + user.email + ' ' + user.type);
        }
        else
            console.log(user.FN + ' ' + user.LN + ' ' + user.email);
    }
    else if (user.type) {
        console.log(user.FN + ' ' + user.LN + ' ' + user.type);
    }
    else
        console.log(user.FN + ' ' + user.LN);
}
var myuser2 = { FN: 'Amira2', LN: 'Chebbi2', email: 'ac@onevcard.de', type: 'Gold' };
displayuser2(myuser2);
