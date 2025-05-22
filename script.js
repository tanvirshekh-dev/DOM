//  <!-- added element in html dom method -->
// const addText = document.getElementById('demo');

// console.log(addText.innerHTML = 'tanvirs world');


// //  <!-- dom document -->
// const element01 = document.getElementById('demo');
// const element02 = document.getElementsByClassName('btn');
// const element03 = document.getElementsByTagName('div');
// console.log(element01, element02, element03);

//    <!-- Dom element -->
// const element = document.getElementsByTagName('button');
// console.log(element);

// const item = document.querySelector('#demo');
// console.log(item);

// const items = document.querySelectorAll('.demo');
// console.log(items);


//    <!-- finding html elements by html object collection -->
// const x = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < x.length ;i++) {
//   text = text + x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;


//   <!-- DOM html -->
// <!-- changing the attribute value -->
// const element = document.getElementById('myImage');

// element.src = 'tanvir.jpg'
// console.log(element);


// dynamic html content
// const element = document.getElementById('demo');
// console.log(element);

// element.innerHTML = Date();
// element.innerHTML = 'Today\'s date is:' + Date();
// template literal
// element.innerHTML = `Today's date is: ${Date()} `;


//  <!-- dom html form -->
// function validInputForm() {
//     const form = document.forms['myForm'];
//     const value = form['fname'].value;
    
//     if (value === "") {
//         alert("you must fill up name");

//         return false;
//     }
// }

// Please input a number between 1 and 15
// function numberValidCheck() {
//     let x = document.getElementById('numb').value;
    
//     let text;
//     if (isNaN(x) || x < 1 || x > 15) {
//         text = "Invalid input"
//     } else {
//         text = "valid input";
//     }
//     document.getElementById('demo').innerHTML = text;
// } 

// dom css 
// const styling = document.getElementById('pera');

// styling.style.color = "red";
// styling.style.fontSize = "30px"
