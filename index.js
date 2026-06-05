// функція яка переводить кілометри в метри
function kmToM(km) {
  return km * 1000;
}
console.log(kmToM(6));

// функція повинна повертати true якщо температура нижче 0, інакше - false
function isBelowZero(temperature) {
  return temperature < 0;
}
console.log(isBelowZero(-17));

// функція приймає три числа і повертає true якщо всі три числа однакові,  інакше - false
function isThreeSame(num1, num2, num3) {
  return num1 === num2 && num2 === num3;
}
console.log(isThreeSame(5, 8, 1));

// функція приймає три числа і повертає слово equal якщо всі три числа однакові,  інакше - not equal

function isThreeSame1(num1, num2, num3) {
  return num1 === num2 && num2 === num3 ? "equal" : "not equal";
}
console.log(isThreeSame1(5, 8, 1));

// функція приймає номер дня тижня і повертає слово
// weekend - якщо 6 або 7
// workday - в усіх інших випадках

function dayOftheWeek(num) {
  return num === 6 || num === 7 ? "weekend" : "workday";
}
console.log(dayOftheWeek(5));

// функція приймає годину дня
// і повертає
// від 6 до 12 - morgan
// від 12 до 18 - tag
// від 18 до 22 - abend
// від 0 до 6 або від 22 до 24 - night
// - wrong data

function getDayTime(hour) {
  if (hour >= 6 && hour < 12) {
    return "morgan";
  }
  if (hour >= 12 && hour < 18) {
    return "tag";
  }
  if (hour >= 18 && hour < 22) {
    return "abend";
  }
  if ((hour >= 0 && hour < 6) || (hour >= 22 && hour < 24)) {
    return "night";
  }
  return "wrong data";
}
console.log(getDayTime(23));

function inputNumber() {
  while (true) {
    const userInput = prompt("Enter a number");
    if (
      userInput === null ||
      userInput === "" ||
      Number.isNaN(Number(userInput))
    ) {
      continue;
    }
    return Number(userInput);
  }
}
// console.log(inputNumber());

// функція приймає ціну піци і кількість друзів і повертає скільки повинен заплатити кожен з них

function splitPizzaBill(price, friends){
  return Math.ceil(price/friends);
}
console.log(splitPizzaBill(100, 3));

// функція перевіряє чи два числа закінчуються однаковою цифрою
function isEqualLastDigital(num1, num2){
  return num1%10===num2%10;
}
console.log(isEqualLastDigital(452, 87));