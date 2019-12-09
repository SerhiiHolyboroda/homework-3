//завдання 1
//let getDiv = c => document.querySelector(c);
// 
// getDiv('div').onmouseover =()=>{   getDiv('div').style.backgroundColor = 'red';
//getDiv('div').onmouseout =()=>   getDiv('div').style.backgroundColor = 'purple';
// 
// 
// getDiv('div').onmouseover =()=>{   getDiv('div').style.backgroundColor = 'yellow';
//getDiv('div').onmouseout =()=>   getDiv('div').style.backgroundColor = 'purple';
// 
// getDiv('div').onmouseover =()=>   getDiv('div').style.backgroundColor = 'green';
//getDiv('div').onmouseout =()=>   getDiv('div').style.backgroundColor = 'purple';
//                                }
//                                }
 
 //завдання 1
 
 //завдання 2

// let getDiv = c => document.querySelector(c);
//  getDiv('#block1').onmouseover =()=>{
//      getDiv('#block1').style.backgroundColor = 'yellow';
//      getDiv('.text').style.color = "lightskyblue"
//      getDiv('#block1').style.borderColor = 'green';
//      getDiv('.text').innerHTML = 'Хочеш знати який?';
//      
//  
//   getDiv('#block1').onclick =()=>{
//  getDiv('#block1').style.backgroundColor = 'black';
//       getDiv('.text').style.color = "white"
//       getDiv('.text').innerHTML = 'А я тобі не скажу!';
//   
//    getDiv('#block1').onclick =()=>{
//  getDiv('#block1').style.backgroundColor = 'yellow';
//       getDiv('.text').innerHTML = 'Хочеш знати який?';
//   }}
//    
//  getDiv('#block1').onmouseout =()=>{
//      getDiv('#block1').style.backgroundColor = 'purple';
//      getDiv('.text').style.color = "blue"
//      getDiv('#block1').style.borderColor = 'orange';
//      getDiv('.text').innerHTML = 'У мене є секрет';
//  }}
// //завдання 2

// Додаткове 1
  
let back1 = prompt('Введіть посилання на ваш фон!');
let back = document.querySelector('#div1');
    let back2 = 'url(' + back1  + ')';
    console.log(back2);
back.style.backgroundImage = back2;
back.style.backgroundSize = '120px 120px ' ;


let back3 = prompt('Введіть посилання на ваш фон!');
let backk = document.querySelector('#div2');
    let back4 = 'url(' + back3  + ')';
    console.log(back3);
backk.style.backgroundImage = back4;
backk.style.backgroundSize = '120px 120px ' ;


let back5 = prompt('Введіть посилання на ваш фон!');
let backkk = document.querySelector('#div3');
    let back6 = 'url(' + back5  + ')';
    console.log(back5);
backkk.style.backgroundImage = back6;
backkk.style.backgroundSize = '120px 120px ' ;
 
 