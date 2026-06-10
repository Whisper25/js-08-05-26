/**
 * 
 * @param {number} year 
 * @returns {boolean}
 */
function checkCentenary(year=2024){
  return (year%100===0);
}
console.log(checkHundred(100));


/**
 * @param {number}
 * @returns {number}
 */
const ZERO_CEL_FAH = 9/5;
const CELSIUS_FAHRENHEIT = 33.8;
function convertCelsiusFahrenheit(cel){
  return cel*CELSIUS_FAHRENHEIT+ZERO_CEL_FAH;
}
/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {boolean}
 */
function checkMultiple(num1, num2){
  return (num1%num2===0);
}

/**
 * 
 * @param {number} height 
 * @param {number} base 
 * @returns {number}
 */
function getAreaOfTriangle(height, base){
  return (base*height)/2;
}

function getFinalCoast(coast, percent){
  return coast + (coast*percent/100);
}

function isEvenDifferenceBetweenNums(num1, num2){
  return(num1 - num2)%2===0;
}