console.group('1 task');
// const askUserAge = prompt('Enter your age');
// const userAge = Number(askUserAge);
// const result = userAge < 18 ? 'Неповнолітній' : 'Повнолітній';
// alert(result);
console.groupEnd();

console.group('2 task');
// const askUserAge = prompt('Enter your age');
// const userAge = Number(askUserAge);
// if (userAge > 12){
//     alert('kid');
// } else if(userAge <= 12 < 18){
//     alert('teen');
// } else if(userAge <=18 < 65){
//     alert('mature');
// }else if (userAge<=65){
//     alert('old');
// } else{
//     alert('invalid input');
// }
console.groupEnd();

console.group('3 task');
// const userTimeInput = prompt('Котра година?');
// const userTime = Number(userTimeInput);
// if (11>userTime && userTime>=5){
//     alert('Добрий ранок');
// } else if (18>userTime && userTime>=11){
//     alert('Добрий день');
// } else if(22>userTime && userTime>=18){
//     alert('Добрий вечір');
// } else if((24>userTime && userTime>=22) && (5>userTime && userTime>=0)){
//     alert('Доброї ночі');
// }else{
//     alert('Такої години не існує');
// }
console.groupEnd();


console.group('4 task');
// const userTimeInput = prompt('Котра година?');
// const userTime = Number(userTimeInput);
// const result = 9<=userTime && userTime<=17 ? 'працює' : 'не працює';
// alert(result);
console.groupEnd();


console.group('5 task');
// const userInput = prompt('Enter your month');
// switch(userInput){
//     case '1':{
//         alert('January');
//         break;
//     }
//     case '2':{
//         alert('February');
//         break;
//     }
//     case '3':{
//         alert('March');
//         break;
//     }
//     case '4':{
//         alert('April');
//         break;
//     }
//     case '5':{
//         alert('May');
//         break;
//     }
//     case '6':{
//         alert('June');
//         break;
//     }
//     case '7':{
//         alert('July');
//         break;
//     }
//     case '8':{
//         alert('August');
//         break;
//     }
//     case '9':{
//         alert('September');
//         break;
//     }
//     case '10':{
//         alert('October');
//         break;
//     }
//     case '11':{
//         alert('November');
//         break;
//     }
//     case '12':{
//         alert('December');
//         break;
//     }
//     default:
//         alert('Incorrect month');
//         break;
// }
console.groupEnd();

console.group('6 task');
// const userInput = prompt('Enter your month');
// switch(userInput){
//     case '1':
//     case '2':
//     case '12':{
//         alert('winter');
//         break;
//     }   
//     case '3':
//     case '4':
//     case '5':{
//         alert('spring');
//         break;
//     }
//     case '6':
//     case '7':
//     case '8':{
//         alert('summer');
//         break;
//     }
//     case '9':
//     case '10':
//     case '11':{
//         alert('autumn');
//         break;
//     }
//     default:
//         alert('Incorrect month');
//         break;
// }
console.groupEnd();

console.group('7 task');
const side1 = prompt('Enter first side');
const side2 = prompt('Enter second side');
const side3 = prompt('Enter third side');
if(side1===side2===side3){
    alert('рівносторонній');
} else if(side1 === side2 || side2 === side3 || side3 === side1){
    alert('рівнобедренний');
}else{
    alert('різносторонній');
}

console.groupEnd();
