/////////////////////Enum
enum Color{
Red=3,Blue=Red*2,Green

}

let x:Color=Color.Green;
console.log(x);

enum Paylog{
    mon=25.26,
    tue=25.33 , wed=0,thur=100,fr=200
}

let y:Paylog=Paylog.mon+Paylog.tue+Paylog.thur+Paylog.wed+Paylog.fr;
console.log(y);

//////////////Any
let an:any;
an='Hello';
console.log(an);
an=55;
console.log(an);
an=true;
console.log(an);
let tab:any[];
tab=[1,2,3];
console.log(tab);
tab=['hj','j'];
console.log(tab);
tab=['hhhh','odjskcd',555,77];
console.log(tab);
let gen:Array<any>;
gen=[true,false,5,5,5,'jhjk','hkjh'];