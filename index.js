const obj = {};
console.log(obj);
function User(name,age,isMale){
  this.name=name;
  this.age=age;
  this.isMale=isMale;
  
}
const UserPrototype = {
  getInfo(){
    return`${this.name} is ${this.age} years old`;
  },
  getGender(){
    return this.isMale ? 'male' : 'female';
  }
}
User.prototype=new UserPrototype;
const user1=new User('Alex',20,true);
console.log(user1);
console.log(user1.getGender);


/**
 * 
 * @param {Number} r 
 */
function Circle(r){
  this.r=r;
}
const CirclePrototype={
  getArea(){
    return Math.PI*r*r;
  },
  getPerimeter(){
    2*Math.PI*r;
  },
  getDiametr(){
    2*r;
  }
}
Circle.prototype=new CirclePrototype;

const user = {
  name:'bred',
}
const userProto={
  say(){
    return`my name is ${this.name}`
  },
  walk(){
    return `im walking`;
  }
}
const student = {
  name:'neo',
}
user.__proto__ = userProto;
student.__proto__ = userProto;



const event={
  title:'Title',
}
const eventProto={
  showTitle(){
    return `${this.showTitle}`;
  }
}
event.__proto__=eventProto;
log.console(event.showTitle());
