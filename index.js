const numbers = [5, 10, 15, 20, 25, 30, 35];
console.log(numbers);
//
const lastNumber = numbers.pop();

numbers.unshift(lastNumber);
console.log(numbers);
//
const firstNumber = numbers.shift();
numbers.push(lastNumber);
console.log(numbers);
//
numbers.splice(2, 3, 55);
console.log(numbers);
//
if (
  numbers.indexOf(10) === numbers.lastIndexOf(10) &&
  numbers.indexOf(10) !== -1 &&
  numbers.lastIndexOf(10) !== -1
) {
  console.log("one time");
} else {
  console.log("more times");
}
//
numbers.forEach((item) => {
  console.log(item * 3);
});
//
const newNums = numbers.map((elem) => elem * 10);
console.log(newNums);
//
const newNumsPlus5 = numbers.map((elem) => elem + 5);
console.log(newNumsPlus5);
//
const newFilterNumbers = numbers.filter((elem) => elem > 20);
console.log(newFilterNumbers);
//
const newFilterNumbers2 = numbers.filter((elem) => elem % 6 === 0);
console.log(newFilterNumbers2);
//

while (true) {
  const userInput = prompt("enter number");
const userNumber = Number(userInput);
if (numbers.includes(userNumber)) {
  console.log("your number is in the massive");
  break;
}
}
