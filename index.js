const movies = [
    { id: 1, title: "Інтерстеллар", director: "Крістофер Нолан", year: 2014, duration: 169, genre: "Наукова фантастика" },
    { id: 2, title: "Початок", director: "Крістофер Нолан", year: 2010, duration: 148, genre: "Трилер" },
    { id: 3, title: "Втеча з Шоушенка", director: "Френк Дарабонт", year: 1994, duration: 142, genre: "Драма" },
    { id: 4, title: "Форрест Гамп", director: "Роберт Земекіс", year: 1994, duration: 142, genre: "Драма" },
    { id: 5, title: "Темний лицар", director: "Крістофер Нолан", year: 2008, duration: 152, genre: "Бойовик" },
    { id: 6, title: "Матриця", director: "Вачовскі", year: 1999, duration: 136, genre: "Наукова фантастика" },
    { id: 7, title: "Гладіатор", director: "Рідлі Скотт", year: 2000, duration: 155, genre: "Історичний" },
    { id: 8, title: "Хрещений батько", director: "Френсіс Форд Коппола", year: 1972, duration: 175, genre: "Гангстерський" },
    { id: 9, title: "Список Шиндлера", director: "Стівен Спілберг", year: 1993, duration: 195, genre: "Історичний" },
    { id: 10, title: "Титанік", director: "Джеймс Камерон", year: 1997, duration: 195, genre: "Романтика" },
    { id: 11, title: "Аватар", director: "Джеймс Камерон", year: 2009, duration: 162, genre: "Фантастика" },
    { id: 12, title: "Сім", director: "Девід Фінчер", year: 1995, duration: 127, genre: "Трилер" },
    { id: 13, title: "Бійцівський клуб", director: "Девід Фінчер", year: 1999, duration: 139, genre: "Драма" },
    { id: 14, title: "Престиж", director: "Крістофер Нолан", year: 2006, duration: 130, genre: "Драма" },
    { id: 15, title: "Коко", director: "Лі Анкріч", year: 2017, duration: 105, genre: "Анімація" },
    { id: 16, title: "Ілюзія обману", director: "Луї Летер'є", year: 2013, duration: 115, genre: "Кримінал" },
    { id: 17, title: "Джокер", director: "Тодд Філліпс", year: 2019, duration: 122, genre: "Драма" },
    { id: 18, title: "Паразити", director: "Пон Чжун Хо", year: 2019, duration: 132, genre: "Трилер" },
    { id: 19, title: "Зелена миля", director: "Френк Дарабонт", year: 1999, duration: 189, genre: "Драма" },
    { id: 20, title: "Індіана Джонс: У пошуках втраченого ковчега", director: "Стівен Спілберг", year: 1981, duration: 115, genre: "Пригоди" }
  ];

  function getMoviesByGenre(movies, genre){
    return movies.filter((movie)=>movie.genre===genre);
  }
  console.table(getMoviesByGenre(movies, "Драма"));
  
  //Назви всіх фільмів певного режисера
  function getTitlesByDirector(movies, director){
    return movies.filter((movie)=>movie.director===director).map((movie)=>movie.title);
  }

console.table(getTitlesByDirector(movies, "Крістофер Нолан"));
//Сортувати фільми за зростанням тривалості
function sortMoviesByDuration(movies){
    return movies.toSorted((movie1, movie2)=>movie1.duration-movie2.duration);
}
console.table(sortMoviesByDuration(movies));

//
function getMoviesByYear(movies, from, to){
    return movies.filter((movie)=>movie.year>=from && movie.year<to);
}
console.table(getMoviesByYear(movies, 1999, 2005));
//
function  getDirectorByYear(movies, year){
    return movies.filter((movie)=>movie.year===year).map((movie)=>movie.director);
}
console.table(getDirectorByYear(movies, 2019));

//
function sortMoviesInGenre(movies){
    return movies.toSorted((movie1, movie2)=>movie1.title.localeCompare(movie2.title))
}
console.table(sortMoviesInGenre(getMoviesByGenre(movies, "Драма")));

//Створи новий масив скорочень (перші три літери).
const months = ["Січень", "Лютий", "Березень", "Квітень"];
const months2 = months.map((month)=>month.slice(0,3))
console.table(months2);

//
const sentence = "JavaScript це весело вивчати";
const wordCount=sentence.split(' ').length
console.log(wordCount);
//Знайди всіх контактів, чиї імена починаються з літери "А".
const contacts = ["Анна", "Артем", "Богдан", "Аліна", "Іван"];
function getContactsByFirstLetter(contacts, letter){
    return contacts.filter((contact)=>contact.startsWith(letter));
}
console.table(getContactsByFirstLetter(contacts, 'А'));

//Pорахуй, скільки разів зустрічається "математика".
const subjects = ["математика", "інформатика", "історія", "математика", "музика", "математика", "інформатика"];
function getSubjectCount(subjects, subjectSearch){
    return subjects.filter((subject)=>subject===subjectSearch).length
}
console.log(getSubjectCount(subjects, "математика"));