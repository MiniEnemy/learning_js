// //variables
// // var

// // var x =90;
// // console.log(x);

// // var x=100;
// // console.log(x);

// // //LET
// // let y=600;
// // console.log(y);

// //  y=1000;
// // console.log(y);

// // // const

// // const  result =90;
// // console.log(result);
// // const result = 900;
// // console.log(result);

// // string

// // const output ="aryan noob" ;
// // console.log(output);
// // console.log(typeof output);

// // number
// // const result =90;
// // console.log(result);
// // console.log(typeof result);

// //float

// // const no=9.99;
// // console.log(no);
// // console.log(typeof no);


// // //undefined
// // let x;
// // console.log(x);

// // // nulll

// // let y=null;
// // console.log(y);
// // console.log(typeof y);

// // //boolean

// // const istrue=true;
// // console.log(istrue);
// // console.log(typeof istrue);

// // // big int

// // const result =58565656n;
// // console.log(result);
// // console.log(typeof result);

// // //symbol

// // const sym=Symbol("hello/7");
// // console.log(sym);
// // console.log(typeof sym);

// //Type conversions
// // x=50.5;
// // console.log(x);
// // console.log(typeof x);
// // const r="123";
// // const op = Number(r);
// // const ops = parseFloat(r); 
// // console.log(r);
// // console.log(op);
// // console.log(ops);
// // console.log(typeof op);
// // console.log(typeof ops);
// // console.log(typeof r);
// // const res =678;
// // const output =String(res);
// // const outp =res.toString(); //converting number to string
// // console.log(output);
// // console.log(typeof output);
// // console.log(outp);
// // console.log(typeof outp);


// // const car=false;
// // const bike=String(car); // converting boolean to string
// // console.log(bike);
// // console.log(typeof bike); 

// //  object Types

// // const obj={
// //     name:"aryan",
// //     age:25,
// //     ismarried:false,
// //     occupation: "webdev",
// // };

// // console.log(obj);
// // console.log(typeof obj);

// // array

// // const arr=[3,1,45,5,64,1,1,1,1,];
// // console.log(arr);
// // console.log(typeof arr);

// // date

// // const date = new Date();
// // console.log(date);
// // console.log(typeof date);

// // concatinate
// // const concatinate =1+"22";
// // console.log(concatinate);
// // console.log(typeof concatinate);

// // const minus = 55-"21";
// // console.log(minus);
// // console.log(typeof minus);

// //  String Methods

// // length

// const result="Hello World";
// console.log(result);
// console.log(result.length);

// // charAT

// console.log(result.charAt(2));

// // indexOf 
// console.log(result.indexOf('o'));

// // lastIndexOf

// console.log(result.lastIndexOf('o')); // it should be the last index of the string 

// // lowercase
// console.log(result.toLowerCase());

// // uppercase

// console.log(result.toUpperCase());

// // replace

// console.log(result.replace('World','Universe')); // it replaces world with universe

// // includes

// console.log(result.includes('World')); // it returns true if the string includes the word or not

// //slice

// console.log(result.slice(2,5)); // it returns the string from the start index to the end index

// // concat

// console.log(result.concat(' Goodbye')); // it concatenates the string


// let tr = "                     broke people";
// console.log(tr.trim()); // it trims the  empty string and returns the   string conc separated   by  commas  between   

// // split

// console.log(tr.split(' ')); // it splits the string by space and returns an array


// concatination 


// let x ="hello world";
// let y = "i love someone";
// console.log(x+y); // concatination
// //  for space 
// console.log( x + " " + y ); // concatination

// template literals
// const a = 50 ;
// const b = 70 ;
// const result = a + b ;
// console.log("The sum of two numbers is :"+result)
// console.log(`The sum of two numbers is :${result}`); 


// Assignment Operators

// let x= 55;
// x = x + 55;

// console.log(x); // 60

// let y= 55
// y += "making things" ;
// y += 55 ;

// console.log(y); // 60

1=="1"; // here it compares the number and dosn't compare the data types so it comes true 

1==="1"; // here it compares the data types and number so data types comes  false

// let a = 10;
// let b = 15;
// let c = "10";
// console.log( a==c);
// console.log( a === c);
// console.log( a !=b);
// console.log( a !=c);
// console.log(a>b);
// console.log(a<b);

// ternary operator

// let agegrp=10;
// console.log( agegrp>=18?"you can vote": "you can't vote");
//                             // if yes       if false

// const obj = {
//     name:"aryan",
//     age:25,
//     isMarried:false,
//     occupation: "webdev",
// };
// delete obj.age;
// console.log(obj);

// let email = "ram@gmail.com";
// let password = "joking";

// if (email === "ram@gmail.com" && password === "joking"){
//     console.log("Login Successful");
// }else {
//     console.log("Login Failed");
// }

//  see grade check

// let grade = 85;

// if(grade >=90 ){
//     console.log("Grade: A+");
// }else if(grade >=80){
//     console.log("grade A");
// }else if(grade >=70){
//     console.log("Grade B+");
// }else if(grade >=60){
//     console.log("Grade B");
// }else if(grade >=50){
//     console.log("Grade C");
// }else if(grade >=40){
//     console.log("Grade D");
// }else{
//     console.log("Failed");
// }


// let weather="Cloudy";

// if(weather=="Cloudy"){
//     console.log("weather is cloudy");
// }else if(weather == "rainy"){
//     console.log("weather is rainy");
// }else if (weather == "summer"){
//     console.log("weather is summer");
// }else if (weather == "winter"){
//     console.log("weather is winter");
// }else {
//     console.log("weather is not defined ");
// }

// Switch

// let role = "Super admin";

// switch (role) {
//     case "buyer":
//         console.log("you can only buy products");
        
//         break;
//     case "seller":
//         console.log("You cans sell produvts");

//     case "admin":
//         console.log("You can add products");
//         break;
//     case "Super admin":
//         console.log("You can do everything");
//         break;

//     default:
//         console.log("Invalid role")
//         break;
// }

// let day = 1;

// switch(day){
//     case 1 :
//         console.log("Sunday");
//         break;
//     case 2 :
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4 :
//         console.log("wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6 :
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default :
//     console.log("Invalid day");
// }


// let date = new Date().getDay();
// console.log(date);

// switch(date){
//     case 0 :
//         console.log("today is Sunday");
//         break;
//     case 1 :
//         console.log("today is Monday");
//         break;
//     case 2:
//         console.log("today is Tuesday");
//         break;
//     case 3 :
//         console.log("today is wednesday");
//         break;
//     case 4 :
//         console.log("today is Thursday");
//         break;
//     case 5 :
//         console.log("today is Friday");
//         break;
//     case 6 :
//         console.log("today is Saturday");
//         break;
//     default :
//     console.log("Invalid day");

// }

// Status

let Status = 200;

switch (Status) {
    case 200:
        console.log("Status OK");
        break;  
    case 201:
        console.log("Created");
        break;
    case 301:
        console.log("Moved Permanently");
        break;
    case 400:
        console.log("bad request");
    case 401:
        console.log("Unauthorized");
        break;
    case 403:
        console.log("Forbidden");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Internal Server Error");
        break;
    default:
        console.log("Unknow Status Code");
}

console.log("finished");
