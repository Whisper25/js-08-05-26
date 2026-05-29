// просимо користувача ввести щось до тих пір, доки він не введе щось
// while (true) {
//     const userInput = prompt('Enter something');
//     if(userInput){
//         alert('Thank you');
//         break;
//     }
// }
// null undefined false '' 0 - - - false
// while (true) {
//     const userInput = prompt('Enter something');
//     if(userInput!==null && userInput!==''){
//         alert('Thank you');
//             break;
//         }
// }

// kористувач вводить початкове значеня - число
// потім він вводить знаки або + або -
// ми залежно від цих знаків робимо інкремент або дікремент
// це все продовжуються до того доки користувач не натисне відміну
// let userNumInput = prompt("Enter number");
// while (
//   userNumInput === null ||
//   userNumInput === "" ||
//   Number.isNaN(Number(userNumInput)) ||
//   Number.isSafeInteger(Number(userNumInput)) === false
// ) {
//   userNumInput = prompt("Enter number");
// }
// let userNum = Number(userNumInput);
// while (true) {
//   const userSymb = prompt("Enter + or -");
//   if (userSymb === null) {
//     break;
//   }
//   switch (userSymb) {
//     case "+":
//       userNum++;
//       break;
//     case "-":
//       userNum--;
//       break;
//     default:
//       alert("+ or -");
//       break;
//   }
// }
// alert(userNum);
let counter = 0;
while (true) {
  const userNumInput = prompt("Enter positive number");
  if (
    userNumInput === null ||
    userNumInput === "" ||
    Number.isNaN(Number(userNumInput)) ||
    Number.isSafeInteger(Number(userNumInput)) === false ||
    Number(userNumInput)<0
  ) {
    continue;
  }
  counter++;
  if(counter>=3){
    break;
  }
}
console.log(counter);