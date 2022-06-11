//////Functions
function add(x:number,y:number):number
{return x+y;}
console.log(add(5,5));
let myAdd = function(z:any,y:any):number
{
    if(typeof z =='string')
    {
        console.log(z);

        z=parseInt(z);
        console.log(z);

    }
    if(typeof y =='string')
    {
        y=parseInt(y);

    }
    
    return z+y;
};
console.log(myAdd('55',4));

function getFullname(FN:String,LN?:String):String
{
    if(LN == undefined)
    {return FN;}
    else
    return FN + '   '+LN;
}

let name1=getFullname('Amira');
console.log(name1);


//////////////// Function with zu viel parameters
function getAllname(FN:String,...restofName:String[])
{
    return FN+ '  '+restofName.join('  /');
}

let name2=getAllname('Amira' , 'chebbi','ooao','kjkd','jkd');
console.log(name2);
