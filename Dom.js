//get element by ID
// let hello=document.getElementById('first-element');

// console.log(hello)
///////////////////////////////////
//get element by class 
//هاي بترجع array
// let name =document.getElementsByClassName('name');

// console.log(name[0])
// console.log(name[1])
// console.log(name)//array
///////////////////////////////////
//get element by tag name
//هاي بترجع array (Html collection)
// let par=document.getElementsByTagName('p');
// console.log(par)
//////////////////////////////
// Get element Query Selector 
// let text =document.querySelector('.lan p');
// let text1 =document.querySelectorAll('.lan p');
// console.log(text1)//NodeList
// console.log(text)
/////////////////////////////////////
//inner Text
// let android=document.getElementById("last-li");
// android.innerText='JS'
///////////////////////////////////
//Style
// let android=document.getElementById("last-li");
// android.style.color='red'
// android.style.background='black'
///////////////////////////////////////
//Create Element
// let languagesList=document.querySelector('ul')
// let ruby=document.createElement('li')
// ruby.innerText='Ruby'
// languagesList.append(ruby)//تقوم بربط العنصر بعنصر اخر 
// console.log(languagesList)
///////////////////////////////////////
//remove element 
let languagesList=document.querySelector('ul')
let last =document.querySelectorAll('li')[2];
last.remove();
console.log(last)



