'use strict';

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt ('Один из последних просмотренных фильмов?', ''),
          b = prompt ('На сколько оцениваете его?','');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("It's OK!");
    } else {
        console.log("ERROR");
        i--;
    }
}

// Проверка кооличества просмотренных пользователей фильмов
if (personalMovieDB.count < 10) {
    console.log ("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы хороший зритель");
} else if (personalMovieDB.count >= 30) {
    console.log ("Вы настоящий киноман!");
} else {
    console.log ("Произошла ошибка");
}

console.log(personalMovieDB);
