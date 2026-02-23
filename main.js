// console.log("welcome to JS Course");
// let name ="tala";
// let age=20;
// console.log(typeof name)//String
// console.log(typeof age)//number
///////////////////////////////////////////
// let result = 2 > 3;
// console.log(typeof result)
//////////////////////////////////////////
// let massage = "welcome to JS Course";
// let massage1 = 'welcome to JS Course';
// let massage2 = `welcome to JS Course`;//backtick
// console.log(typeof massage2)// char or Space or letter or word or sentence
////////////////////////////////////////
//Template Literals
/*ويساعد انه نحط النص في اكتر من سطر 
نقدر نضع كود jsداخل النص  
*/ 
// let language = "C++";
// let massage = `welcome to
//  ${language} Course`; //Backtick اسمها

// console.log(massage)
////////////////////////////////////////
// let name ;//undefined
// console.log(typeof name)
////////////////////////////////////////
// let value =5.2;
// console.log(typeof value)
//////////////////////////////////////
//NaN => Not a Number
// let value = 2;
// console.log(value * `tala`)//NaN
//////////////////////////////////////
//Null
// let value=null ;//Null => no value =>empty value=> directly assigned by programmer
// console.log(value)
////////////////////////////////////////
//String length
// let name = "tala";
// console.log(name.length)
////////////////////////////////////////
//String Concatenation `+`
// let firstName = "tala";
// let lastName = "Rafat";
// let fullName = firstName + " " + lastName+`.`;
// console.log(fullName+`*`)
///////////////////////////////////////
//Bracket Notation[الاقواس المربعة]
// let language = "JavaScript";
// console.log(language[0])//J
// console.log(language[1])//a
////////////////////////////////////////
//Array
// let color='red';
// let colors=['red','black','white'];
// console.log(color)
// console.log(colors)
// console.log(colors[0])//[]=>index
// console.log(colors[1])
// console.log(colors[2])
//////////////////////////////////////////////
//update Array
// const colors = ['red', 'black', 'white'];
// console.log(colors[1]);
// colors[1] = 'blue';//update black to blue
// console.log(colors)
////////////////////////////////////
//Array length
// const colors = ['red', 'black', 'white','yellow'];
// console.log(colors.length)
////////////////////////////////////
//Includes method
// const colors = ['red', 'black', 'white',];
// console.log(colors.includes(`red`))
// console.log(colors.includes(`blue`))
/////////////////////////////////////
//Add element to start of Array
// const colors = ['red', 'black', 'white'];
// colors.unshift(`yellow`);//add yellow to start of Array
// console.log(colors)
////////////////////////////////////////
//Delete element to start of Array& add value of removed element to variable(بترجع قيمة بنحكي عنها انها بتاخد قيمة العنصر اللي تم حذفه من بداية المصفوفة وبتحطها في متغير)
// const colors = ['red', 'black', 'white'];
// console.log(colors)
// let redColore=colors.shift();//add value of removed element to variable
// colors.shift();//remove black from start of Array
// colors.shift();//remove white from start of Array
// console.log(colors)
// console.log(redColore)
////////////////////////////////////////////
//Add element to end of Array
// const colors = ['red', 'black', 'white'];
// colors.push(`yellow`);//add yellow to end of Array
// console.log(colors)
////////////////////////////////////////
//delete element to end of Array& add value of removed element to variable(بترجع قيمة بنحكي عنها انها بتاخد قيمة العنصر اللي تم حذفه من نهاية المصفوفة وبتحطها في متغير)
// const colors = ['red', 'black', 'white'];
// let whiteColore=colors.pop();//add value of removed element to variable
// colors.pop();//remove white from end of Array
// console.log(colors)
// console.log(whiteColore)
//////////////////////////////////////////////////
//IsArray method
// let color='red';
// const colors = ['red', 'black', 'white'];
//     console.log(Array.isArray(color))
//     console.log(Array.isArray(colors))
////////////////////////////////////////////////
//2D Array || Nested Array||array of arrays
// const values=[1,true ,"tala"];
// console.log(values[0])
// const value=[
//     [1,2,3],
//     [4,5,6]
//  ,  [7,8,9]
// ];
// console.log(value[0])// =>[1,2,3]
// console.log(value[0][0])// =>1
// console.log(value[1][1])// =>5
/////////////////////////////////////////
//Split method => تحويل النص الى مصفوفة
// let variable = "welcome to JS";
// const result = variable.split(" ");//split by space
// console.log(result)
// const result1 = variable.split("");//split by character
// console.log(result1)
//////////////////////////////////////////
//Join method => تحويل المصفوفة الى نص
// let variable = ["welcome", "to", "JS"];
// const result = variable.join(" ");//join by space
// console.log(result)
// const result1 = variable.join("");//join by character(بدون مسافة)
// console.log(result1)    
//////////////////////////////////////////
//Condational Statements
// let age =14;
// if(age<12){
//     console.log('Sorry')
// }else {
//     console.log(`welcome`)
// }
// let number =1;
// if(number>0){
//     console.log(`+`)
// }
//     else if(number<0){
//     console.log(`-`)
// }
// else{
//     console.log(`Zero`)
// }
////////////////////////////////////
//Swirch Statement 
// const colors=[`red`,`green`,`blue`];
// let colorNumber=6   ;//1=>red 2=>green 3=>blue
// switch(colorNumber){//بحط القيمة اللي بدي اشيك عليها 
//     case 1:
//         console.log(colors[0])
//         break;
//     case 2:
//         console.log(colors[1])
//         break;  
//     case 3:
//         console.log(colors[2])
//         break;
//         case 4:
//         case 5:
//         console.log(`balck`)
//         break
       
//     default:
//         console.log(`Invalid color number`)

// }
//////////////////////////////////////////
//Loops
//For Loop
// for(let i=5;i>=1;i--){
//     console.log(i)
// }
// const colors = ['red', 'black', 'white', 'yellow'];
// for(let i=0;i<colors.length;i++){
//     console.log(colors[i])
// }
//foreach 
// colors.forEach((colores)=>{
//     console.log(colores)
// })
//For of loop
//     element+of+Array Name
// for(let color of colors){//Of=> Array name 
//     console.log(color)
// } 
//////////////////////////////////////////
//For of with String
// const  values="welcome to JS";
// for(let char of values){
//     console.log(char)
// }
//////////////////////////////////////////////
//While Loop
// const colors = ['red', 'black', 'white', 'yellow'];
// let i=0;//beginning of Array
// while(i<colors.length){
//     console.log(colors[i])
//     i++;//increment
// }
////////////////////////////////////
//do while Loop
// const colors = ['red', 'black', 'white', 'yellow'];
// let i=0;//beginning of Array
// do{
//     console.log(colors[i])
//     i++;//increment
// }while(i<colors.length)
//////////////////////////////////////////
//break statement
// const numbers=[1,2,3,0,4,5];
// for(let i=0;i<=numbers.length;i++){
//     if(numbers[i]===0){
//         break;//stop the loop when number is 0
//     }
//     console.log(numbers[i])
// }
// console.log('*** ')
//////////////////////////////////////////
//continue statement
// const numbers=[1,2,3,0,4,5];
// for(let i=0;i<=numbers.length;i++){
//     if(numbers[i]===0){
//         continue;//skip the number 0 and continue with the next iteration
//     }
//     console.log(numbers[i])
// }
//////////////////////////////////////////

    



