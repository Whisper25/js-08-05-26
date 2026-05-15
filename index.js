// const num1 = 5;
// const num2 = 8;
// const num3 = 8;

// const str1 = '5';
// const str2 = 'cat'; // 99
// const str3 = 'dog';
// const str4 = 'cat';
// const str5 = 'Cat'; // 67

// console.log(num1>num2); // больше
// console.log(num1<num2);

// console.log(num1>=num2); 
// console.log(num1<=num2); 

// console.log(num3>=num2); // больше или равно
// console.log(num3<=num2);

// console.log(num1==num2); // равно
// console.log(num3==num2);

// console.log(num1!==num2); // -  не равно
// console.log(num1!==num2);

// console.log(num1 === str1); //5number '5'string = не равно
// console.log(str2 === str1); // не равно
// console.log(str4 === str2); // равно
// console.log(num1 === Number(str1)); //равно
// console.log(str5 > str2); // 67<99

// const acessAge = 12;
// const userAge = prompt('Enter your age');
// console.log(typeof userAge);
// if(Number(userAge) >= acessAge){
//     alert('You can buy the tickets');
// } else{
//     const yearWait = acessAge - Number(userAge);
//     alert('You need to wait '+yearWait+" years");
// }

// const num1User = prompt('Enter 1st number');
// const num2User = prompt('Enter 2nd number');
// const num1 = Number(num1User);
// const num2 = Number(num2User);
// if (num1>num2){
//     alert(num1+' - bigest');
// } else if (num2 > num1){
//     alert(num2 + ' - bigest');
// } else{
//     alert('Equal');
// }

// const acessPassword = 'qwe123';
// const userPassword = prompt('Enter password');
// if(userPassword === acessPassword){
//     alert("You're welcome");
// } else if(userPassword !== acessPassword){
//     alert('Get out!');
// }

const userNumber = prompt('Enter your number');
const number = Number(userNumber);
if(number>0){
    alert('positive');
} else if(number<0){
    alert('negative');
} else if(number===0){
    alert('zero')
}
