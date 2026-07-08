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


class Circle{
    constructor(radius){
        _radius
        this.radius
    }
    set radius(value){
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
        getArea(){
            return (Math.PI*this._radius**2);
          }
          getPerimetr(){
            return(2*Math.PI*this._radius);
          }
        }
try {
    const circle=new Circle(10);
    console.log(circle.getArea());
    console.log(circle.getPerimetr());
} catch (error) {
    console.error(error);
}


class User{
    #login;
    #age;
    constructor(login){
        this.login=login;
    }
    set login(value){
        if(typeof value !== 'string'){
           throw new TypeError("type must be string");
        }
        if(value.trim().length<3||value.trim().length>15){
            throw new RangeError('length 3..15');
        }
        this.#login=value;
    }
    get login(){return this.#login;}
}

try {
    const user = new User('qwe');
    console.log(user);
} catch (error) {
    console.error(error);
}