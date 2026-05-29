// for (let i=0; i<5; i++) {
//     console.log(i);
// }

// let i = 0;
// while(i<5){
//     console.log(i);
//     i++
// }
// let i=5;
// while(i>0){
//     console.log(i);
//     i--;
// }
// for (let i=5; i>0; i--){
//     console.log(i);
// }

// for(let i=10; i<50; i++){
//     if(i%7===0){
//         console.log(i);
//     }
// }

// const start = 10;
// const end = 20;
// let summa = 0;
// for(let i=start; i <end; i ++){
//     console.log(i);
//     summa += i; //summa = summa + i;
// }
// console.log(summa);

// const start = 5;
// const end = 10;
// let mult = 1;
// for(let i=start; i <end; i ++){
//    mult*=i
// }
// console.log(mult);

// const start = 0;
// const end = 10;
// let summa =0;
// let mult = 1;
// for(let i=start; i <= end; i ++){
//    if(i%2===0){
//     summa+=i;
//    } else{
//     mult*=i;
//    }
// }
// console.log('mult = ' + mult + '\nsumma= ' + summa);


const pass = '123qwe';
maxTry = 3;
for(let i=0; i<maxTry; i++){
    const userInputPass = prompt('Enter password');
    if(userInputPass === password){
        alert('Welcome');
        break;
    }
}
alert('залишилось ' + (maxTry - i -1)+ ' спроби');