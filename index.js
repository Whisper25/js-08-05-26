// const userName = prompt('Enter your name');
// const isUserName = confirm('Is that your name ' + userName + '?');
// if (isUserName) {
//     alert('Hi, ' + userName);
// } else{
//     alert('Be more careful next time!');
// }

// const nyGift = prompt('Що ти хочеш на новий рік?');
// const isNyGift = confirm('Чи ти впевненний, що хочеш ' + nyGift + '?');
// if (isNyGift){
//     alert("Добре, пішов шукати твій подарунок...");
// } else{
//     alert('Добре, подумай ще');
// }



// ++ - +1
// -- - -1
// let amount = 0;
// if (confirm('Чи Сонце є зіркою?')){
//     amount++;
// }
// if (confirm('Чи людина побувала на Марсі?')){
//     amount++;
// }
// if (!confirm('Чи можна почути звук у космосі?')){
//     amount++;
// }


// alert('Ваш результат ' + amount);

if (confirm('')){
    let usd = prompt('');
    let courseUah = prompt('');
    let result = usd*courseUah;
    alert('' +result+'');

} else{
    let uah = prompt('');
    let courseUsd = prompt('');
    let result = uah/courseUsd;
    alert('' + result+'');
}