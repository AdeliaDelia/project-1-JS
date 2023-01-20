'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt ('Один из последних просмотренных фильмов?', '').trim(),
                b = prompt ('На сколько оцениваете его?','');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("It's OK!");
            } else {
                console.log("ERROR");
                i--;
            }
        } 
    },
    // Проверка кооличества просмотренных пользователей фильмов
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log ("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы хороший зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log ("Вы настоящий киноман!");
        } else {
            console.log ("Произошла ошибка");
        }
    },   
    // функция проверяет сво-во private и при значении false 
    // выводит главный объект программы
    showMyDB: function (hidden) {
        while (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    // функция записывает в массив данных genres ответы пользователя
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre === null) {
                console.log('Вы неверно ввели данные или ничего не ввели');
                i--;
            } else {
                personalMovieDB.genres [i -1]= genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }

};


