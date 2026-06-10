const firstNameUser ='Brad';
const lastNameUser = 'Pitt';
const ageUser = 32;
const genderUser = 'male';
const user1 ={
  firstName: 'Brad',
  lastName: 'Pitt',
  age: 32,
  isMale:true,
}
console.log(user1);
console.log(user1.isMale);
const book = {
  title: 'It',
  author: 'Steven King',
  yearCreate: 1982,
  isReading: false,
  getInfo(){
    return `${this.author} '${this.title}', ${this.yearCreate}`;
  },
  "two words": 'value',
}
console.log(book["two words"]);
console.log(book.getInfo());
console.log(book);
const object = new Object({key:12});
console.log(object);
book.pages = 845;

delete book.pages;

//
const phone = {
  brand: 'Sony',
  model: 'XP',
  price: 560,
  getDetails(){
    return `${this.brand} ${this.model} costs $${this.price} color: ${this.color}`;
  },


};
console.log(phone.getDetails());
phone.color = 'red';
console.log(phone.getDetails());


const country = {
  name: 'Germany',
  capital:'Berlin',
  area:357.022,
  population:83.6,
  getDescribe(){
    return `The ${this.capital} is capital of ${Germany}`;
  },
  getDestination(){
    return this.population/this.area;
  },
}

const rectangle ={
  width:10,
  height:5,
  getPerimetr(){
    return (this.width+this.height)*2
  },
  getArea(){
    return this.width*this.height;
  }
}