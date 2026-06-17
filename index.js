const names = [
  'anna', 'max', 'otto', 'leo'
]
const lastName = names.pop();
const firstName = names.shift();
names.unshift(lastName);
names.push(firstName);
console.log(names)
//
// const names1 = [
//   'anna', 'max', 'otto', 'leo', 'pete'
// ]
// const indexStart=names1.indexOf('leo');
// console.log(indexLeo);
// names1.splice(indexLeo, 1);
// console.log(names1);
// const deleteCount=1;
// names1.splice(indexStart, deleteCount, 'Jack');
// console.log(names1);
//
const weekDays=[
  'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'
]
weekDays.splice(1,2,'Friday');
weekDays.splice(0, 1, 'Saturday');
weekDays.splice(3,10);
console.log(weekDays);

const numbers = [
  5,7,1,6,9,3
];
const key = 2;

if(numbers.includes(key)===false){
  numbers.unshift(key);
}
console.log(numbers);

const colors=[
  'red', 'yellow', 'blue', 'purple', 'orange', 'pink'
];
const userColor = prompt('enter your fav color');
if(colors.includes(userColor)===true){
  const userColorIndex = colors.indexOf(userColor);
  colors.splice(userColorIndex, 1);
}else{
  const userIndex = prompt('enter index for your color');
  colors.splice(Number(userIndex), 1, userColor);
}
console.log(colors);


const colors1 = [
  'red', 'yellow', 'red'
];
console.log(colors1);
console.log(colors.indexOf('red'));
console.log(colors.lastIndexOf('red'));
console.log(colors.indexOf('red', 3));
