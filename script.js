//XMLHTTP:

//var request=new XMLHttpRequest();
//request.open('GET','https://restcountries.com/v3.1/all',true);
//request.send();
//request.onload=function()
//{
    //var data=JSON.parse(request.response);
    //console.log(data);
    //console.log(data[4].region);  //region maddum print
 

//for(var i=0;i<data.length;i++)  //all region print
//{
   // console.log(data[i].name.official,data[i].region); //all cotry name print 
//}
//}

/*
//assignment    

var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function()
{
    var data=JSON.parse(request.response);
    console.log(data);
for(i=0;i<data.length;i++)
{
    console.log(data[i].name,data[i].capital,data[i].population);
}
}
*/
//assignment

var son=new XMLHttpRequest();
son.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);
son.send();
son.onload=function()
{
    var data=JSON.parse(son.response);
    console.log(data);
    for(i=0;i<data.length;i++)
    {
        console.log(data[i].id,data[i].name,data[i].email);
    }
}
