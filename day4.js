class car
{
    constructor(name,year,color)  //parametrized constructor
    {
        this.name=name;
        this.year=year;
        this.color=color;
    }   
}
/*
let r1=new car("audi",2019,"black"); //const instiallization-adding the value
let r2=new car("benz",2018,"white");  //next refernce values 
console.log(r1.name); 
console.log(r2.name,r2.year,r2.color);

//method 
class book
{
    constructor(page,index,numberofpage)
    {
        this.page=page;
        this.index=index;
        this.numberofpage=numberofpage;
        this.model="a6";     //new for method
    }
    getmethod()
    {
     return this.model;
    }
}
let n1=new book("plain","noted",500,"a6");
n1.model="a7";                    //new obj add means 
let modelno=n1.getmethod();
console.log(modelno);

//ASSIGNMENT
pi=3.14
class circle
{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    getarea()
    {
        return pi*this.radius*this.radius; 
    }
    getcircumference()
    {
        return 2*pi*this.radius;
    }
    getcolor()
    {
        return this.color;
    }
    getradius()
    {
        return this.radius;
    }
}
let v1=new circle(1.1,"red");
let area=v1.getarea();
console.log(area);
let circum=v1.getcircumference();
console.log(circum);
let colr=v1.getcolor();
console.log(colr);
let rad=v1.getradius();
console.log(rad);

