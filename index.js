// запитай в користувача нову марку машини
// якщо така марка вже є - виведи "Така марка вже є"
// якщо не має - виведи всі марки і їх позиції в масиві, і спитай після якої позиції додати нову марку в масив

// const cars = ['bmw', 'audi', 'ford']
// const userCar = prompt('enter a car mark', 'tesla');
// if(cars.includes(userCar)){
//   console.log("Така марка вже є");
// }else{
//   for (let index = 0; index < cars.length; index++) {
//     console.log(index, cars[index]);
//   }
//   const userIndex = prompt('введи індекс після якого треба додати нову марку');
//   cars.splice(Number(userIndex)+1, 0, userCar);
// }
// console.log(cars);

// Масив seats = ['free', 'taken', 'free', 'free', 'taken'].
// За допомогою методів indexOf і lastIndexOf:
// Займи перше вільне місце
// Видали останнє зайняте
// const seats = ['free', 'taken', 'free', 'free', 'taken'];
// const firstFree = seats.indexOf('free');
// // seats.splice(firstFree, 1, 'taken');
// seats[firstFree]='taken';
// const LastTaken = seats.lastIndexOf('taken');
// seats.splice(LastTaken, 1);
// console.log(seats);

const numbers = [4, 5, 9, 23, 83, 6, 88];
// for (let index = 0; index < numbers.length; index++) {
//   if(numbers[index]%2===1){
//     console.log(numbers[index]);
//   }  
// }
// for (const key in numbers) {
//   console.log(numbers[key]);
// }
// for (const element of numbers) {
//   console.log(element);
// }
// перемести число з другої позиції на останню
// const del2ndNum = numbers.splice(2, 1).at(0);
// numbers.push(del2ndNum);
// console.log(numbers);
// const lastNum = numbers.pop();
numbers.unshift(numbers.pop());
console.log(numbers);
