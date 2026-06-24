const numbers = [4, 7, 29, -22, 19, -4];
console.log(numbers);
//forEach
// numbers.forEach((value) => {
//   console.log(value);
// });
// numbers.forEach((value) => {
//   if(value%2){
//     console.log(value);
//   }
// });
//
// const negativeCount = numbers.filter((value)=>value<0).length;
// console.log(negativeCount);

// const newNumbers = numbers.map((num)=>(num%2===0 ? num*2 : num));
// console.log(newNumbers);

// const summa = numbers.reduce((acc, currentNum) => acc + currentNum, 0);
// console.log(summa);
// //accumulator
// const summaPositive1 = numbers.reduce(
//   (acc, currentNum) => (currentNum > 0 ? acc + currentNum : acc),
//   0
// );
// const summaPositive2 = numbers
//   .filter((num) => num > 0)
//   .reduce((acc, currentNum) => acc + currentNum, 0);
// console.log(summaPositive1);
// console.log(summaPositive2);

// є масив чисел - створи новий масив, в якому залишаться тільки ті елементи, які мають менше значення за середнє аріфметичне усіх елементів джерельного масиву
const numbersAverage = numbers.reduce((acc, num) => acc + num) / numbers.length;
const newNumbersLessAverage = numbers.filter((num)=> num<numbersAverage);
console.log(newNumbersLessAverage);
console.log(numbersAverage);
