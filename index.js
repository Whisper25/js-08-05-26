
//rest - ...
function summa(a,b, ...args){
    // console.log(a);
    // console.log(b);
    console.log(args);//array
    return args.reduce((accumulator, elem)=>accumulator+elem, 0);
}
console.log(summa(1,2,3,4,5,6,7));

const numbers =[1,5,9,3];

//spred - ...
console.log(summa(...numbers));
//


