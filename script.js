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
const x = document.forms['frm1'];

let text = " ";
for (let i = 0; i <= x.length; i++){
    text = text + x.element[i].value;
}
document.getElementById('demo').innerHTML = text;