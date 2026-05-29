// let amountPlate = 0;
// const totalAmountPlate = 5;


// // while (amountPlate>0){
// //     console.log('washing plate', amountPlate);
// //     amountPlate--;
// // }
// while (amountPlate<totalAmountPlate){
//     amountPlate++;
//     console.log(amountPlate);
// }

// while (true){
//     const userInput= prompt('Enter number 77');
//     if(userInput==='77'){
//         alert('thanks');
//         break;
//     }
// }
// while(true){
//     const userInput= prompt('Enter number multiply 7');
//     if(Number(userInput)%7===0 && userInput!=='' && userInput!==null){
//         alert('thanks');
//         break;
//     }
// }

// while (true) {
//     const userInput= prompt('Enter zero');
//     if(userInput==='0'){
//         alert('thanks');
//         break;
//     }
// }
// while (true) {
//     const userInput = prompt('enter something');
//     if(userInput!==null, userInput!==''){
//         alert('thanks');
//         break;
//     }
// }

const secretNumber = 4;

while(true){
    const userInput= prompt('enter secret number');
    const userNum= Number(userInput);
    if(userNum === 4){
        alert("You're right!");
        break;
    }
    else if(userNum === '' || userNum === null || Number.isNaN(userNum)){
        alert("error. please, enter number");
    }else if(userNum>secretNumber){
        alert('secret numbers less');
    }else if(userNum<secretNumber){
        alert('secret numbers bigger');
    }
}