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
let age =14;
if(age<12){
    console.log('Sorry')
}else {
    console.log(`welcome`)
}


