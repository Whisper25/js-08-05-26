// const num1Input = prompt('Enter 1st num');
// const num2Input = prompt('Enter 2nd num');
// const num1 = Number(num1Input);
// const num2 = Number(num2Input);

// if(num1>0 && num2>0){
//     alert('pos');
// }else if(num1<0 && num2<0){
//     alert('neg');
// }else{
//     alert('diff');
// }

// const summaInput = prompt('Enter summa');
// const summa = Number(summaInput);
// const minSumma = 1000;

// const delivery = (summa>=minSumma) ? 0 : 50;

// // if (summa>minSumma){
// //     delivery=0;
// // } else{
// //     delivery=50;
// // }
// alert('до сплати = '+(summa + delivery))

// const number = prompt('Enter number');
// let wordEvenOdd = (Number(number)%2===0) ? 'Even' : 'Odd';
// alert(number+' - '+wordEvenOdd);
// const priceTicket = 100;
// const userAgeInput = prompt('Enter your age');
// const userAge = Number(userAgeInput);
// const sale = (userAge<18 || userAge>65) ? 10 : 0;
// const summaCheck = priceTicket - (priceTicket*sale/100)
// alert(summaCheck);

// const userInput = prompt("Enter");
// const number = Number(userInput);
// const module = (number >=0) ? number : -number;
// alert(module);
const userInput1 = prompt('Enter 1st side');
const side1 = prompt(userInput1);
const userInput2 = prompt('Enter 2nd side');
const side2 = prompt(userInput2);
const titleFigure = (userInput1===userInput2) ? 'квадрат' : 'прямокутник';
alert(titleFigure);