// const start = 10;
// const end = 20;
// const secretNumber = 17;

// for(let i=start; i=end; i++){
//   if(i===secretNumber){
//     continue;
//     alert('after continue');
//   }
//   console.log(i);
// }

// while(true){
//   const userInput = prompt('Enter number');
//   if(userInput === null){
//     alert('must be careful');
//   }
//   if(Number(userInput)===secretNumber){
//     alert('win');
//     break;
//   }
// }

// const number1 = 2;
// const number2 = 7;
// const result = number1 + number2;

// while(true){
//   const userInput = prompt(`скільки буде 
//     ${number1} * ${number2} ?`);
//   if(userInput === null || userInput.trim()===''){
//     alert('must be careful');
//     continue;
//   }
//   if(Number(userInput)===result){
//     alert('win! відповідь = ' + result);
//     break;
//   }
//   alert('Спробуй ще!');
// }

// const start = 15;
// const end = 25;
// for(let i=start; i<end; i++){
//   if(i%4===0 && i%5===0){
//     continue;
//   }
//   console.log(i);
// }


// const start = 1;
// const end = 10;
// let summa = 0;

// for(let i=start; i<=end; i++){
//   if(i%2===0 || i%3===0){
//     continue;
//   }
//   summa+=i;
//   console.log(summa);
// }

// const number = 5;

// for(let i = 1; i <=10; i++){
//   console.log(`${number}*${i}=${number*i}`);
// }

for(let num1= 1; num1<=10; num1++){
  console.group(num1);
  for(let num2=1; num2<=10; num2++){
    console.log(`${num1}*${num2}=${num1*num2}`);
  }
  console.groupEnd();
}