// Об'єкт game
// Властивості:
// name
// genre
// hoursPlayed
// Метод:
// getProgress → "You have played [name] for [hoursPlayed] hours."

const game = {
  name: "Minecraft",
  genre: "Sandbox",
  hoursPlayed: 256,
  getProgress() {
    return `You have played ${this.name} for ${this.hoursPlayed} hours.`;
  },
};
console.log(game.getProgress());

// Об'єкт laptop — ноутбук для навчання та ігор
// Властивості:
// brand
// ram (в гігабайтах)
// storage (в гігабайтах)
// Метод: getTotalMemory → Повертає суму RAM і storage.

const laptop = {
  brand: "HP",
  ram: 16,
  storage: 300,
  getTotalMemory() {
    return this.ram + this.storage;
  },
  toString() {
    return `laptop ${this.brand}`;
  },
};
console.log(laptop.getTotalMemory());
// alert(laptop);

// Функція конструктор для Сircle — коло
// Властивості: radius
// Методи:
// getPerimeter → 2 * π * radius
// getArea → π * radius²

function Circle(radius) {
  this.radius = radius;
  this.getPerimeter = function () {
    return 2 * Math.PI * this.radius;
  };
  this.getArea = function () {
    return Math.PI * (this.radius ** 2);
  };
}
const circle1 = new Circle(10);
console.log(circle1);
circle1.radius=6;
console.log(circle1.getArea());
console.log(circle1.getPerimeter());

// Функція конструктор  playList — плейлист
// Властивості:
// totalSongs
// listenSongs
// Метод:
// getListenSongsPercent → Повертає у відсотках кількість прослуханих пісень
// getRestSongsPercent → Повертає у відсотках кількість  пісень, що лишилося прослухати

function PlayList(totalSongs=10, listenSongs=6){
  this.totalSongs=totalSongs;
  this.listenSongs=listenSongs;
  this.getListenSongsPercent = function(){
    return (this.listenSongs*100)/this.totalSongs;
  };
  this.getRestSongsPercent = function(){
    return 100-this.getListenSongsPercent();
  };
}
const playList1 = new PlayList();
console.log(playList1.getListenSongsPercent());
console.log(playList1.getRestSongsPercent());
