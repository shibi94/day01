//map function

var arr=[1,2,3,4];
let res=arr.map((element)=>element*2);
console.log(res);
//function vachu

var arr=[1,2,3,4];
let res1=arr.map(foo);
function foo(value)
{
    return value*5;
}
console.log(res1);

//filter
var arr=[1,2,3,4];
let res2=arr.filter((element)=>element % 2=== 0);
console.log(res2);

var originalvalue=['w','w','e','k','k','m','w','s'];
var duplicatevalue=['w','w','e','k','k','m','w','s'];
let duplicate=originalvalue.filter((emt,value)=>originalvalue!=duplicatevalue);
console.log(duplicate(originalvalue));



//ex prin the name mark graterthan 60

var student=[{
    name:'alice',
    mark:60
},
{
    name:'bob',
    mark:70
},
{
    name:'mak',
    mark:80
}];
let result=student.filter((elmt)=>elmt.mark>60);
console.log(result.map((elmt)=>elmt.name));

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
request.onload=function()
{
    var data=JSON.parse(request.response);
    console.log(data);
    let result=data.filter((elmt)=>elmt.population<100000);
    console.log(result);  //all details below 1lk popu
    console.log(result.map((elmt)=>elmt.name.official));//only country name below popula 1lk
   
}
