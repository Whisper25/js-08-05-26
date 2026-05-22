// // remainder % -остача
// const number = 654;
// const remainder = number%2;
// if(remainder === 0){
//     console.log('even', ' парне');
// }else{
//     console.log('odd', ' непарне');
// }
// const number7 = 654;
// const remainder7 = number7%7;
// if(remainder7 === 0){
//     console.log('кратне 7 ', ' multiply 7');
// }else{
//     console.log('не кратне 7 ', ' not multiply 7');
// }


// ! інверсія
// console.log(!true); // false
// console.log(!false); //true

// const str ='';
// console.log(!str); //true
//false : undefined, null, '' "" ``, 0 +0 -0, NaN
// else - True
// console.log(Boolean(undefined));
// console.log(Boolean(null)); 

// const userAgeInput = prompt('Enter your age');
// const startSchoolAge = 6;
// const endSchoolAge = 17;

// const userAge = Number(userAgeInput);

// if(userAge>=startSchoolAge && userAge<=endSchoolAge){
//     alert('school');
// }else{
//     alert('not school');
// }

// const userNumInput = prompt('');
// const userNum = Number(userNumInput);
// if(userNum%3===0 && userNum%7===0){
//     alert('win');
// }else{
//     alert('lose');
// }

const userInput = prompt('Enter');
console.log(userInput);
const userNumber = Number(userInput);
console.log(userNumber);

const error1 = userInput === null;
const error2 = userInput === '';
const error3 = Number.isNaN(userNumber);
if(error1 || error2 || error3){
    alert('Error.\n'+userInput + ' - not a number!');
}else{
    if(userNumber>=0 && userNumber <=23){
        alert("thanks");
    }else{
        alert('Error.\n'+userInput + ' - not a number!');
    }
}

