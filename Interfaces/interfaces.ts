function displayuser1(user:{FN:string,LN:string})
{
    console.log(user.FN+' '+user.LN);

}

let myuser= {FN:'Amira',LN:'chebbi'};
displayuser1(myuser);

interface User extends Membership
{ FN:string,
    LN?:string
   email?:string
};

interface Membership{
    type?:string;
}

interface userfunc
{
    (name: string,  age:number ):string;
}

let getuser :userfunc;
getuser=(name:string,age:number):string=>{
    return ' the name is " '+name+ ' " the age is ' + age;
}
console.log(getuser('Amira',22));
function displayuser2(user:User)
{
   if(user.email) 
   {
    if(user.type)
    {
        console.log(user.FN+' '+user.LN+' '+user.email+' '+user.type);
    }
    else
    console.log(user.FN+' '+user.LN+' '+user.email);
   }
   
   else if(user.type)
   {
    console.log(user.FN+' '+user.LN+' '+user.type);
   }
   else
    console.log(user.FN+' '+user.LN);

}
let myuser2= {FN:'Amira2',LN:'Chebbi2',email:'ac@onevcard.de',type:'Gold'};
displayuser2(myuser2);