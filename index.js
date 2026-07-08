class User{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    logName(){
        console.log(this.name);
    }
}


const user = new UserActivation('Alex', 23);
console.log(user);
user.logName();

class Pet{
    constructor(type, name, age){
        this.type=type;
        this.name=name;
        this.age=age
    }
    eat(){
        return `${this.name} is eating`;
    }
    sleap(){
        return `${this.name} is sleaping`;
    }
    walk(){
        return `${this.name} is walking`;
    }
    
}
const pet = new Pet('humster', 'Ray', 1);
pet.eat();
pet.walk();
pet.sleap();
console.log(pet);

class BankCard{
    constructor(owner, balance, experience){
        this.owner=owner;
        this.balance=balance;
        this.experience=experience;

    }
    toString(){
        return `bank card ${this.owner}`
    }
    addToBalance(money){
        return this.balance+=money;
    }
    showBalance(){
        return this.balance;
    }
    withdrawMoney(money){
        return this.balance-=money;
    }
}
const card =new BankCard('qwe', '2025');
console.card(card.toString())
card.addToBalance(100);
console.log(card.showBalance());
//
class Book{
    constructor(title, author, id){
        this.title=title;
        this.author=author;
        this.id=Book.count++;
    }
    static count=0
    showInfo(){
        return `
        title = ${this.title}
        author = ${this.author}
        id = ${this.id}
        `
    }
}
class Reader{
    constructor(name, id){
        this.name=name;
        this.id=Reader.count++;
    }
    static count=0
    showInfo(){
        return`name= ${this.name}
        id=${this.id}`
    }
}
class Library{
    constructor(){
        this.books=[];
        this.readers=[];
        this.booksAndReaders=[];
    }
    addBook(...book){
        this.books.push(...book);
    }
    addReader(...reader){
        this.readers.push(...reader);
    }
    getBookForReader(user, book){
        this.getBookForReader.push({idReader:this.reader.id, idBook:this.book.id})
    }
    showAllBooks(){
        this.books.forEach((elem)=>console.table(elem))
    }
}
const book1=new Book('It', 'Kiing');
const book2=new Book('Autsider', 'Kiing');
const user1 = Reader('Brad');
const user2 = Reader('Pete');
const library = new Library();
library.addBook(book1, book2);
library.addReader(user1, user1);
library.getBookForReader(user2, book2);
library.getBookForReader(user1, book1);
library.showAllBooks();
console.log(library);