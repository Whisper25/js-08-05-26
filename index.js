// const colors =[
//   'red', 'orange', 'yellow', 'green'
// ]
// console.log(colors);
// console.log(colors.length);
// console.log(colors[0]);
// colors[8]='white';

// const numbers = new Array[6,25,13,41];
// console.log(numbers);
// console.log(numbers.length);

//

const array1=[3] // -- 0 = 3
console.log(array1);

const array2=new Array(3); //-- length = 3
console.log(array2);

const array3 = new Array(3,4);
console.log(array3);

//

const names = [
  'Neo', 'Alex', 'Bred',
]
console.log(names.length);

names.push(
  'Anna', 'Maria', 'Olga'
); //+last
names.unshift('Max', 'Fred'); // +first

const delLastName=names.pop(2); // - last
console.log(delLastName);

const delFirstName=names.shift(); // - first
console.log(delFirstName);

console.log(names);


//


const seasons=[
  'winter', 'spring', 'summer', 'autumn',
]
seasons.push('summer');
seasons.shift();
seasons.push('winter');
seasons.unshift('autumn');
seasons.pop();
console.log(seasons);

const fruits=[]
fruits.push('apple', 'orange', 'coconut');
fruits.unshift('mango', 'banana');
fruits.pop(2);
fruits.unshift('orange', 'coconut');
console.log(fruits);