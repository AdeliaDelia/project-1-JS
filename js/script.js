'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms() {
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
}
rememberMyFilms();


// Проверка кооличества просмотренных пользователей фильмов
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log ("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы хороший зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log ("Вы настоящий киноман!");
    } else {
        console.log ("Произошла ошибка");
    }
}
detectPersonalLevel();

