class Square {
  _side;
  constructor(side) {
    this.side = side;
  }
  set side(value) {
    if (typeof value !== "number") {
      throw new TypeError("type must be number");
    }
    if (value <= 0) {
      throw new RangeError("value must be positive");
    }
    this._side = value;
  }
  get side() {
    return this._side;
  }
  getArea() {
    return this.side ** 2;
  }
}
try {
  const square = new Square(10);
  square.side = 5;
  console.log(square);
  console.log(square.side);
} catch (error) {
  console.error(error);
}

class Circle {
  constructor(radius) {
    _radius;
    this.radius;
  }
  set radius(value) {
    if (typeof value !== "number") {
      throw new TypeError("type must be number");
    }
    if (value <= 0) {
      throw new RangeError("value must be positive");
    }
    this._radius = value;
  }
  get radius() {
    return this._radius;
  }
  getArea() {
    return Math.PI * this._radius ** 2;
  }
  getPerimetr() {
    return 2 * Math.PI * this._radius;
  }
}
try {
  const circle = new Circle(10);
  console.log(circle.getArea());
  console.log(circle.getPerimetr());
} catch (error) {
  console.error(error);
}

class User {
  #login;
  #age;
  constructor(login) {
    this.login = login;
  }
  set login(value) {
    if (typeof value !== "string") {
      throw new TypeError("type must be string");
    }
    if (value.trim().length < 3 || value.trim().length > 15) {
      throw new RangeError("length 3..15");
    }
    this.#login = value;
  }
  get login() {
    return this.#login;
  }
  showHi() {
    return "Hi, my login is " + this.#login;
  }
  askQuestion() {
    return "my question: .....?";
  }
}
class Moderator extends User {
  #status;
  constructor(login, status) {
    super(login);
    this.status = status;
  }
  set status(value) {
    if (typeof value !== "string") {
      throw new TypeError("must be string");
    }
    if (value !== "main" && value !== "simple") {
      throw new RangeError("must be main or simple");
    }
    this.#status = value;
  }
  get status() {
    return this.#status;
  }
  showHi() {
    return super.showHi() + "My status: " + this.#status;
  }
  askQuestion() {
    return "im moderator, " + super.askQuestion();
  }
}
const moderator = new Moderator("Bob", "main");
console.log(moderator);
console.log(moderator.showHi());
console.log(moderator.askQuestion());
try {
  const user = new User("qwe");
  console.log(user);
} catch (error) {
  console.error(error);
}

///

function throwErrorNumber(value) {
  if (typeof value !== "number" || value <= 0) {
    throw new Error("invalid value");
  }
}

class Product {
  #name;
  #price;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  set(value) {
    if (typeof value !== "string" || value.trim().length < 3) {
      throw new Error("invalid value");
    }
    this.#name = value;
  }
  get name() {
    return this.#name;
  }
  set price(value) {
    throwErrorNumber(value);
    this.#price = value;
  }
  get price() {
    return this.#price;
  }
  getInfo(){
    return this.#name + ' - ' + this.#price;
  }
}
class RealProduct extends Product {
  #weight;
  constructor(name, price) {
    super(name, price);
    this.weight = weight;
  }
  set weight(value) {
    throwErrorNumber(value);
    this.#weight = value;
  }
  get weight() { return this.#weight;}
  getInfo(){
    return super.getInfo()+', weight = '+this.#weight + 'kg'
  }
}
class VirtualProduct extends Product {
  #size;
  constructor(name, price, size) {
    super(name, price);
    this.size = size;
  }
  set size(calue) {
    throwErrorNumber(value);
    this.#size = value;
  }
  get size() {
    return this.#size;
  }
  getInfo(){
    return super.getInfo()+', size = '+this.#size+'mb'
  }
}
try {
  const milk = new Product("milk", 40);
  console.log(milk.getInfo());
  const disk = new RealProduct("music disk", 154, 0.05);
  console.log(disk.getInfo());
  const albom = new VirtualProduct("new albom", 200, 110);
  console.log(albom.getInfo());
} catch (error) {
  console.error(error);
}
