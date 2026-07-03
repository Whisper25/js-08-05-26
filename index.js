const number = 301;
// console.log(number, typeof number);
// const numToStr=String(number, typeof numToStr);
//console.log(numToStr);
// const arrStr=numToStr.split('');
//console.log(arrStr, typeof arrStr);
// const arrNums = arrStr.map((elem)=>Number(elem));
//console.log(arrNums, typeof arrNums);
// const summa = arrNums.reduce((accumulator, elem)=>accumulator, elem);
// console.log(summa, typeof summa);

// const result = String(number).split('').map((elem)=>Number(elem)).reduce((accumulator, elem)=>accumulator, elem);
// console.log(result);

//
const minDigit = Number(String(number).split('').sort().at(0));
const maxDigit = Number(String(number).split('').sort().at(-1));
console.log(minDigit);
console.log(maxDigit);
//
const numbers = [5,17,1,9,10,4,2,101];
console.log(numbers.sort((a,b)=>a-b));
console.log(numbers.sort((a,b)=>a+b));
console.log(numbers.reverse());

const numbersSorted = numbers.toSorted((a,b)=>a-b);
// const numbersSortedReverse=numbersSorted.toReverse();

const products = [
    {id:1, title:'milk', price:30.45, amount:50, category:'milk & cheeses'},
    {id:3, title:'cheese', price:330.75, amount:5, category:'milk & cheeses'},
    {id:2, title:'beef', price:250.15, amount:7, category:'meat'},
    {id:8, title:'checkin', price:130.20, amount:100, category:'meat'},
    {id:7, title:'cookie', price:33.00, amount:65, category:'cookie\'s & bread'},
    {id:27, title:'bread', price:20.50, amount:14, category:'cookie\'s & bread'},
    {id:6, title:'yogurt', price:30.45, amount:23, category:'milk & cheeses'},
    {id:24, title:'fish', price:185.60, amount:62, category:'meat'},
];      
console.table(products);
const sortedProductByPrice = products.toSorted((a,b)=>a.price-b.price)
const productWithMinPrice = sortedProductByPrice.at(0);
console.table(productWithMinPrice);
//
const sortedProductByTitle = products.toSorted((a,b)=>{
    if(a.title===b.title){
        return 0;
    }
    if(a.title>b.title){
        return 1;
    }
    if(a.title<b.title){
        return -1;
    }
})
console.table(sortedProductByTitle);
//
// const sortedProductByAmount = products.toSorted((a,b)=>a.amount-b.amount);
// console.table(sortedProductByAmount);
//
const meatProducts = products.filter((elem)=>elem.category === 'meat');
console.table(meatProducts);
//
const lessThan30 = products.filter((elem)=>elem.amount<30);

console.table(lessThan30);
const lastProductsTitle = products.filter((elem)=>elem.amount<30).map((elem)=>elem.title);





console.table(lastProductsTitle);







