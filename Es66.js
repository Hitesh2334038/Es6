//let and const

//
// //Es5
// var name5='Hitesh Sonar';
// var age=23;
// name5='Ashok Sonar';
// console.log(name5);
//
//
// //Es6
//
// const name6='Shalini Sonar';
// let age6=26;
// //name6='Aarti sonar';
// console.log(name6);
// console.log(age6);


// //Es5
// driverLicence(20);
// function driverLicence(passTest){
//   if(passTest){
//     var firstName='john';
//     var year=1998;
//
//     //console.log(firstName+' '+'Born in'+year+'is now officialy allow to drive car...');
//   }
//   console.log(firstName+' '+'Born in'+year+'is now officialy allow to drive car...');
//
//
// }
//
// //Es6
//
// function driverLicence6(passTest){
//   let firstName6;
// const year6=1998;
//   if(passTest){
//
//      firstName6='john';
//     //const year6=1998;
//     //console.log(firstName+' '+'Born in'+year+'is now officialy allow to drive car...');
//   }
//   console.log(firstName6+' '+'Born in'+year6+'is now officialy allow to drive car...');
//
// }
// driverLicence6(true);
//



// var i=23;
// //let i=23;
//
// for(var i=0;i<5;i++){
//   console.log(i);
// }
// console.log(i);


//blocks and IIFES
//Es6
// {
//   const a=1;
//   let b=2;
//   var c=3;
// }
// //console.log(a+b);
// console.log(c);
// //Es5
// (function(){
//   var c=3;
// })();
// //console.log(c);


//strings
//ES6
// let firstName='Hitesh';
// let lastName='Sonar';
// const year=1998;
// function calcAge(year){
//   return 2020-year;
// }
//
// //Es5
// console.log('This is '+firstName+''+lastName+''+'hes is born in '+year+'today he is'+''+calcAge(year));
// //ES6
//
// console.log(`this is ${firstName} ${lastName}. ${calcAge(year)}`);
//
// const n=`${firstName} ${lastName}`;
// console.log(n.startsWith('H'));
// console.log(n.endsWith('r'));
// console.log(n.includes('on'));
// console.log(`${firstName}`.repeat(5));

//Arrow function

// const years=[1996,1992,1998,2200];
//
// //Es5
// var ages5=years.map(function(el){
//   return 2020-el;
//
// });
// console.log(ages5);
// //ES6
// let ages6=years.map(el=>2016-el);
// console.log(ages6);
//
//
//
//
// ages6=years.map((el,index)=>`Age element ${index+1}:  ${2020-el}.`);
// console.log(ages6);
//
// ages6=years.map((el,index)=> {
//   const now=new Date().getFullYear();
//   const age=now-el;
//   return (`Age element ${index+1}:  ${age}.`);
//
// });
// console.log(ages6);


//arrow Function not have this keyword they have lexical this keywpord

//Es5
// var box={
//   color:"green",
//   position:1,
//   clickMe:function(){
//
//     var self=this;
//     document.querySelector('.green').addEventListener('click',
//   function(){
//     var str='this is box number  '+self.position+'  and is is '+self.color;
//     alert(str);
//     });
//   }
// }
// box.clickMe();

//ES6
const box6={
  color:"green",
  position:1,
  clickMe:function(){


    document.querySelector('.green').addEventListener('click',
  ()=>{
    var str='this is box number  '+this.position+'  and is is '+this.color;
    alert(str);
    });
  }
}
box6.clickMe();

const box7={
  color:"blue",
  position:2,
  clickMe1:function(){
    document.querySelector('.blue').addEventListener('click',
  ()=>{var str1='This box num is '+this.position+' box color is '+this.color;
  alert(str1);
});
  }
}
box7.clickMe1();

const box8={
  color:"orange",
  position:3,
  clickMe2:function(){
    document.querySelector('.orange').addEventListener('click',
  ()=>{var str2='This box num is '+this.position+' box color is '+this.color;
  alert(str2);
});
  }
}
box8.clickMe2();

// const box66={
//   color:"green",
//   position:1,
//   clickMe:()=>{
//
//
//     document.querySelector('.green').addEventListener('click',
//   ()=>{
//     var str='this is box number  '+self.position+'  and is is '+self.color;
//     alert(str);
//     });
//   }
// }
// box66.clickMe();


// function Person(name){
//   this.name=name;
// }
//ES5
// Person.prototype.myFriends5=function(friends){
//
// var arr=friends.map(function(el){
//   return this.name+'is friends with '+el;
// }.bind(this));
// console.log(arr);
// }
//
// var friends=['Hitesh','Satish','Akshay'];
// new Person('kirti').myFriends5(friends);
//
//
// //Es6
//
// Person.prototype.myFriends6=function(friends){
//
// let arr=friends.map(el =>
//    `${this.name} is friends with ${el}`);
//
// console.log(arr);
// }
//
// new Person('Shalu').myFriends6(friends);



//destructring
//Es5
// var john=['john',26];
// var name=john[0];
// var age=john[1];
//
// //Es6
// const [name1,year1]=['john',26];
// console.log(name);
// console.log(year1);
//
//
// const obj={
//   firstName:'jphn',
//   lastName:'Sonar'
// };
// const{firstName,lastName}=obj;
// console.log(firstName);
// console.log(lastName);
//
//
// const{firstName:a,lastName:b}=obj;
// console.log(a);
// console.log(b);





//
// function calcAgeRetirement(year){
//   const age2=new Date().getFullYear()-year;
//   return[age2,65-age];
// }
//
// const [age3,retirement]=calcAgeRetirement(1990);
// console.log(age3);
// console.log(retirement);



//arrays

// const boxes=document.querySelectorAll('.box');
//
// //Es5
// var boxesArrs=Array.prototype.slice.call(boxes);
// boxesArrs.forEach(function(cur){
//   cur.style.backgroundColor='blue';
// });
//
// //Es6
// const boxesArr6=Array.from(boxes);
// boxesArr6.forEach(cur=>
// cur.style.backgroundColor='blue');
//
//
//
// //ES5
// // for(var i=0;i<boxesArrs.length;i++){
// //   if(boxesArrs[i].className === 'box blue')
// //   {
// //     continue;
// //   }boxesArrs[i].textContent='I changed to blue';
// // }
//
// //Es6
// for (const cur of boxesArr6){
//    if(cur.className.includes('blue') ){
//      continue;
//    }
//    cur.textContent='I changed to blue ';
// }
//
//
//
// //Es5
// var ages=[12,17,8,21,14,11];
//
// var full=ages.map(function(cur){
//   return cur>=18;
// });
// console.log(full);
//
// console.log(full.indexOf(true));
//
// //Es6
// console.log(ages.findIndex(cur=> cur>=18));
// console.log(ages.find(cur => cur>=18));

//spread operator

// function addFourAges(a,b,c,d){
//   return a+b+c+d;
// }
//
// var sum11=addFourAges(18,30,12,21);
// console.log(sum11);
//
// //Es5
// var ages=[18,20,12,21];
// var sum2=addFourAges.apply(null,ages);
// console.log('sum 2 is :'+sum2);
//
// //Es6 spread
// const max3=addFourAges(...ages);
// console.log('sum 3 is :'+max3);
//
//
// const familySmith=['john','mark'];
// const familyHitesh=['Hitesh','shalini'];
// const bigFamily=[...familySmith,...familyHitesh];
// console.log(bigFamily);
//
// const h=document.querySelector('h1');
// const boxes=document.querySelectorAll('.box');
// const all=[h,...boxes];
//
// Array.from(all).forEach(cur=> cur.style.color='white');


//rest parameters

//Es5
// function isFullAges(){
//   //console.log(arguments);
//   var argsArr=Array.prototype.slice.call(arguments);
//   argsArr.forEach(function(cur){
//     console.log((2016-cur)>=18);
//   })
// }
//
// isFullAges(1999,1992,2000,1999,1997);
//
// //ES6
// function isFullAges6(...years){
//   years.forEach(cur=>console.log((2020-cur)>=18));
// }
// isFullAges6(1999,1992,1996,1998,1995);


// function isFullAges(limit){
//   //console.log(arguments);
//   var argsArr=Array.prototype.slice.call(arguments,1);
//   //console.log(argsArr);
//   argsArr.forEach(function(cur){
//     console.log((2016-cur)>=limit);
//   })
// }
//
// //isFullAges(21,1999,1992,2000,1999,1997);
//
// //ES6
// function isFullAges6(limit,...years){
//   years.forEach(cur=>console.log((2020-cur)>=limit));
// }
// isFullAges6(21,1999,1992,1996,1998,1995);

//default parameters
// function SmithPerson(firstName,year,lastName){
//   lastName === undefined ? lastName='sonar':lastName;
//
//   this.firstName=firstName;
//   this.lastName=lastName;
//   this.year=year;
// }
//
// var john=new SmithPerson('john',1920);

//Es6
// function SmithPerson(firstName,year,lastName='Smith'){
//   this.firstName=firstName;
//     this.lastName=lastName;
//     this.year=year;
// }
//
// var john=new SmithPerson('john',1920);

//maps
// const question=new Map();
// question.set('question','what is the official name ?');
// question.set(1,'Es5');
// question.set(2,'Es6');
// question.set(3,'Es65');
// question.set(4,'Es68');
// question.set('correct',2);
//
// question.set(true,'Correct ans');
// question.set(false,'wrong ans');
//
// console.log(question.get('question'));
// console.log(question.size);
//
// // if(question.has(4)){
// // question.delete(4);
// // }
//
// //question.clear();
// //question.forEach((value,key)=>console.log(`this is ${key} , and ${value} `));
//
// for(let [key,value] of question.entries()){
//   console.log(`this is ${key} , and ${value} `);
//
// }
//
// const ans= parseInt(prompt('write the correct ans'));
// console.log(question.get(ans===question.get('correct')));


//classes
//ES5
// var Person5=function(name,year,job){
//   this.name=name;
//   this.year=year;
//   this.job=job;
// }
//
// Person5.prototype.calcAge=function(){
//   var age=new Date().getFullYear-this.year;
//   console.log(age);
// }
// var jon=new Person5('hitesh',1998,'SoftwearDeveloper');

//Es6
// class Person6{
//   constructor(name,year,job){
//     this.name=name;
//     this.year=year;
//     this.job=job;
//   }
//   calcAge(){
//     var age=new Date().getFullYear-this.year;
//      console.log(age);
//   }
//
//   static greeting(){
//     console.log('hey there');
//   }
// }
// const Hitesh=new Person6('Hitesh',1998,"engg");
// Person6.greeting();

//classes and subclasses

//Es5
// var Person5=function(name,year,job){
//   this.name=name;
//   this.year=year;
//   this.job=job;
// }
//
// Person5.prototype.calcAge=function(){
//   var age=new Date().getFullYear9()-this.year;
//   console.log(age);
// }
// var Athlete5=function(name,year,job,olygames,medals){
//   Person5.call(this,name,year,job);
//   this.olygames=olygames;
//   this.medals=medals;
// }
//
//
// Athlete5.prototype=Object.create(Person5.prototype);
// var john=new Athlete5('john',2020,'techer',3,10);

//Es6
class Person6{
  constructor(name,year,job){
    this.name=name;
    this.year=year;
    this.job=job;
  }
  calcAge(){
    var age=new Date().getFullYear()-this.year;
     console.log(age);
  }
}
class Athlete6 extends Person6{
  constructor(name,year,job,olygames,medals)
  {
    super(name,year,job);
    this.olygames=olygames;
    this.medals=medals;
  }

  wonMedal(){
    this.medals++;
    console.log(this.medals);
  }
}
const Hitesh=new Athlete6("Hitesh",1998,'techer',3,10)
Hitesh.calcAge();
Hitesh.wonMedal();
