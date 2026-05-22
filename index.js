//є число, ми виводимо win, якщо число ділиться на 3 або 4,  в інших випадках виводимо lose

const number = 9;
const number2 = 5;
const number3 = -17;

// const result = (number%3===0 || number%4===0) ? 'win' : 'lose';

// Якщо число більше 10 і менше 20 — вивести ok, інакше no.
// const result = (number>10 && number<20) ? 'ok' : 'no';

// Якщо хоча б одне число дорівнює 10 — вивести hit, інакше miss.
// const result = (number===10 || number2===10) ? 'hit' : 'miss';

// Якщо число ділиться на 2 і не ділиться на 4 — вивести good, інакше bad.
// const result = (number%2===0 && number%4!==0) ? 'good' : 'bad';

// є три числа.
// Якщо хоча б одне число від’ємне — вивести negative, інакше positive.
// const result = (number<0 || number2<0 || number3<0) ? 'negative' : 'positive';

// Якщо число більше 100 && парне — вивести super, інакше simple.
// const result = (number>100 && number%2===0) ? 'super' : 'simple';

// Якщо число ділиться на 2 або 3, але не ділиться на 5 — вивести win, інакше lose.
// const result =
//   (number % 2 === 0 || number % 3 === 0) && number % 5 !== 0 ? "win" : "lose";

// Якщо число більше 10 і менше 100, або дорівнює 200 — вивести ok, інакше no.
// const result = (number > 10 && number < 100) || number === 200 ? "ok" : "no";

// Якщо хоча б одне число більше 50 і обидва не від’ємні — вивести yes, інакше no.
// const result = (number>50 || number2>50) && number>=0 && number2>=0 ? 'yes' : 'no';

// три числа.
// Якщо всі числа додатні або всі від’ємні — вивести same, інакше different.
// const result = (number>0 && number2>0 && number3>0) || (number<0 && number2<0 && number3<0) ? 'same' : 'different';

// Якщо число знаходиться між 10 і 20 або між 30 і 40 — вивести inside, інакше outside.
// const result = (number>10 && number<20) || (number>30 && number<40) ? 'inside' : 'outside';

// три числа.
// Якщо хоча б два числа рівні — вивести pair, інакше unique.
// const result = (number === number2) || (number === number3) || (number2 === number3) ? 'pair' : 'unique';

// два числа.
// Якщо одне число парне, а друге непарне — вивести average, інакше summa.

const result = (number%2===0 && number2%2!==0) || (number2%2===0 && number%2!==0) ? (number+number2)/2 : number+number2; 
console.log(result);
