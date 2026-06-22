//function declaration
function logWord1(word) {
  console.log(word);
}
logWord1("text");

//function expression
const logWord2 = function (word) {
  console.log(word);
};
logWord2("new text");

//arrow function
const logWord3 = (word) => {
  console.log(word);
  return 12;
};
logWord3("3 word");

// const mult =(a,b)=>{
//     return a*b;
// }
//=
const mult = (a, b) => a * b;

console.log(mult(4, 6));
const getPerimetr = (side) => side * 4;
const isAdult = (age, AGE_ADULT = 18) =>
  age >= AGE_ADULT ? "adult" : "not adult";
console.log(isAdult(9));

const site = {
  title: "my site",
  headers: ["qwe1", "qwe2", "qwe3"],
  showHeader() {
    this.headers.forEach(function (elem) {
      console.log(elem);
    });
  },
  // showHeaderAndTitle(){
  //     this.headers.forEach(function(elem){
  //         console.log(elem, this.title);
  //     })
  // }
  showHeaderAndTitle() {
    this.headers.forEach((elem) => {
      console.log(elem, this.title);
    });
  },
};
site.showHeader();
site.showHeaderAndTitle();

// forEach

const numbers = [2, 4, 9, 3, 7, 6];
numbers.forEach((number, index, array) => {
  console.log(number, index, array);
});
numbers.forEach((number) => {
  console.log(number, number ** 2);
});

// map
const newArrayNumbers = numbers.map((elem) => elem * elem);
console.log(newArrayNumbers);
console.log(numbers);

//filter
const newEvenNumbers = numbers.filter((item) => item % 2 === 0);
console.log(newEvenNumbers);
console.log(numbers);

//reduce

const summa = numbers.reduce((accumulator, number) => accumulator + number);
console.log(summa);
console.log(numbers);
