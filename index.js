
/**
 * 
 * @param {number} number1 
 * @param {number} number2 
 * @returns {number}
 */
function addTwoNumbers(number1=0, number2=0){
  const summa = number1+number2;
  return summa;
}
const result = addTwoNumbers(4,5);
console.log(result);
console.log(addTwoNumbers(4,9));
console.log(addTwoNumbers());

/**
 * 
 * @param {number} logSquareSide 
 * @returns {number}
 */
function getSquareArea(SquareSide=5){
  const area = SquareSide*SquareSide;
  return area;
}
console.log(addTwoNumbers(4));

/**
 * 
 * @param {number} start 
 * @param {number} end 
 * @returns {number}
 */
function getSumOfRange(start, end){
  let summa = 0;
  for(let i=start; i<end; i++){
    summa+=i;
  }
  return summa;
}
console.log(getSumOfRange(1, 20));

//

function getNumSign(num){
  if(num>0){
    return 'positive';
  }
  if(num<0){
    return 'negative';
  }
  return "zero";
}
console.log(getNumSign(5));
console.log(getNumSign(-5));
console.log(getNumSign(0));

/**
 * 
 * @param {number} num 
 * @returns {string}
 */
function isEven(num){
  if(num%2===0){
    return 'even';
  }
  return 'odd';
}
console.log(isEven(4));
console.log(isEven(5));


/**
 * 
 * @param {number} num 
 * @returns {string}
 */
function isEven2(num){
  return num%2===0 ? 'even' : 'odd';
}
console.log(isEven(4));
console.log(isEven(5));

console.log(isEven2(4));
console.log(isEven2(5));


/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {string}
 */
function getBigger(num1,num2){
  return num1>=num2 ? num1 : num2;
}
console.log(getBigger(5,6));

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @param {number} num3 
 * @returns {string}
 */
function getSmaller(num1, num2, num3){
  if(num1<num2 && num1<num3){
    return num1;
  }
  if(num2<num3 && num2<num1){
    return num2;
  }
  return num3;
}
console.log(getSmaller(4, 2, 8));