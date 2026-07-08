//Створи клас Message з полем text. Додай метод uppercase(), який повертає повідомлення великими літерами.
class Message{
    #text
    constructor(text){
        this.text = text;
    }
    set text(value){
        if(typeof value !=='string' && typeof value !== 'number'){
            throw new TypeError("invalid type");
        }
        if(value.trim()===''){
            throw new RangeError("invalid value");
        }
        this.#text=value;
    }
    get text(){
        return this.#text;
    }
    uppercase(){
        return this.text.toUpperCase();
    }
}
//Створи клас Timer, який починається з seconds = 0. Метод tick() додає 1 секунду. Метод getTick() повертає кількість секунд.
class Timer{
    #seconds
    constructor(){
        this.#seconds=0;
    }
    static #step=10;
    tick(){
        return this.#seconds+=Timer.#step;
    }
    getTick(){
        return this.#seconds;
    }
    
}

try {
    const msg1 = new Message('Hello world');
    console.log(msg1.uppercase());
    const timer1 =new Timer();
    console.log(timer1);
    timer1.tick();
    timer1.tick();
    timer1.tick();
    console.log(timer1.getTick());


} catch (error) {
    console.error(error);
}
console.log('1');
//
const names = ['Sasha', 'Marta', 'Sasha', 'Andrii', 'Marta', 'Oleh'];
const uniqueNames = [...new Set(names)];
// console.log(uniqueNames.size);
console.log(uniqueNames);
// const uniqueNamesArray = [...uniqueNames]
// console.log(uniqueNamesArray);
