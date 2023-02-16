//Reduce method:

//find the sum of array
//intial value not given
var arr=[1,2,3,4];
var sum=arr.reduce((acc,emt)=>acc+emt);
console.log(sum);

//intial value gn=20
var arr=[1,2,3,4];
var sum=arr.reduce((acc,emt)=>acc+emt,20);
console.log(sum);

var arr=["true","value"];
var sum=arr.reduce((acc,emt)=>acc+emt);
console.log(sum);

//userinput(0).slice.map(num)

//spread operator

let lrrr=['bob','Med','alice'];
console.log(...lrrr);
//eg

let aarr=['h','i','v','g','s','d'];
let res=[...aarr];
console.log(res);  //original val
console.log(aarr);  //duplicate val

// USE INSIDE function 

function foo(a1,a2,a3)
{
console.log(a1);
console.log(a1*a2*a3);
}
let arr2=[1,2,3];
foo(...arr2);
//eg
let aaa=['strng','tuy','true'];
let truevalue=[...aaa];
console.log(truevalue);
console.log(aaa[1]);
console.log(aaa[2]);
console.log(aaa);



