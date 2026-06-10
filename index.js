
/**
 * 
 * @param {string} name 
 * @param {number} age 
 */
function User(name, age){
  this.name = name;
  this.age = age;
  this.getInfo = function(){
    return `${this.name} is ${this.age} years old`
  }
}
const user1 = new User('Fred', 12);
console.log(user1.getInfo());

function Phone(brand, model, price){
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.getDetails=function(){
    return `${this.brand} ${this.model} coasts $${this.price}`;
  }
}
const phone1 = new Phone('Xiaomi','M12', '250');
console.log(phone1.getInfo());


function Movie(title, director, releaseYear){
  this.title = title;
  this.director = director;
  this.releaseYear = releaseYear;
  this.getPoster = function(){
    return `${this.title} directed by ${this.director} in ${releaseYear}`;
  }
  this.toString = function(){
    return this.title;
  }
}
const movie1 = new Phone('movie','director', 'year');
console.log(movie1);
console.log(movie1.toString());


function City(name, country, population){
  this.name=name;
  this.country =country;
  this.population=population;
  this.toString=function(){
    return `City ${name} is in country ${country}`;
  };
  this.getFullInfo = function(){
    return `City ${name} is in country ${country} with population ${population}`;
  }
}
const city1 = new City('name','country', 'population');
