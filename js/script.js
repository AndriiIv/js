'use strict';

const numberOfFilms = +prompt('How many movies have you seen?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один із останніх фільмів?', ''),
      b = prompt('Ваша оцінка?', ''),
      c = prompt('Один із останніх фільмів?', ''),
      d = prompt('Ваша оцінка?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);