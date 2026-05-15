// // Напишіть програму, яка запитує у користувача кількість книг, які він хоче прочитати за місяць, і за допомогою confirm пропонує розрахувати середню кількість книг на тиждень.
// const userBookCount = prompt(
//   "Введіть кількість книг, які ви хочете прочитати за місяць"
// );
// console.log(userBookCount);
// // (5+2)/2 - середнє
// const WEEKS_IN_MONTH = 4;
// if (userBookCount === "") {
//   alert("Invalid value");
// } else if(userBookCount === null){
//     alert(':(');
// } else if (confirm("розрахувати середню кількість книг на тиждень?")) {
//   console.log(Number(userBookCount) / WEEKS_IN_MONTH);
// }


// Напишіть програму, яка запитує у користувача його вік і за confirm перевіряє, чи хоче він дізнатися, скільки днів прожив (приблизно). Якщо так — обчисліть і покажіть результат.
// const userAge = prompt('Введіть ваш вік');
// const numUserAge = Number(userAge);
// const DAYS_IN_YEAR = 365; // константа в житті
// if(Number.isNaN(numUserAge)){
//     alert('Not a number');
// } else if(userAge === null){
//     alert(':(');
// } else if(userAge === ''){
//     alert('Invalid value');
// } else if(confirm('Чи хочете дізнатися скільки днів ви прожили?')){
//     const daysCount = numUserAge*DAYS_IN_YEAR;
//     alert('Ви прожили '+daysCount+' днів')
// } else{
//     alert(':(');
// }

// Напишіть програму, яка запитує у користувача розмір знижки (%) та ціну товару. За confirm запропонуйте розрахувати кінцеву ціну зі знижкою. Виведіть результат.

// price /100 *sale - розмір знижки
// const userPrice = prompt('Введіть ціну')
// const numPrice = Number(userPrice);
// const userSalePercent = prompt('Введіть процент знижки');
// const numSalePercent = Number(userSalePercent);
// const maxSalePercent = 10;
// if(numSalePercent>maxSalePercent){
//     alert('Вибачте, у нас немає такого товару!')
// } else if(confirm('розрахувати кінцеву ціну зі знижкою?')){
//     const sale = numPrice/100*numSalePercent;
//     const result = numPrice - sale;
//     alert(result);
// }

// Напишіть програму, яка запитує у користувача кількість кілометрів для поїздки та витрату пального на 100 км. Використовуйте confirm для розрахунку загальної витрати пального, і виведіть результат через alert.
const userKM = prompt('кількість кілометрів для поїздки');
const numKM = Number(userKM);
const fuelPer100KM = prompt('Введіть витрату пального на 100 км');
const numFuelPer100KM = Number(fuelPer100KM);
if(confirm('Хочете розрахунок загальної витрати пального')){
    const result = numKM/100*numFuelPer100KM;
    alert('загальна витрата пального '+result);
}
