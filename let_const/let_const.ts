let  a=55;
console.log(a);

function showVar()
{
    var a=55;
    if(true){
        var a=44;
        console.log(a);
    }
    console.log(a);
}

showVar();

function showLet()
{
    let a=66;
    if(true){
        let a=77;
        console.log(a);
    }
    console.log(a);
}

showLet();

for(var i=0;i<5;i++)
{
    console.log(i);
}

console.log(i);

const colors=[];
colors.push("red");
colors.push("blue");
colors.push("green");
console.log(colors);
