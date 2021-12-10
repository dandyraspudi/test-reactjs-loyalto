import { SET_GENRE, SET_MOVIE, SET_MOVIE_DETAIL } from './ActionType';

export function setGenres(data){
  return {
    type: SET_GENRE,
    payload: data
  }
}

export function setMovies(data){
  return {
    type: SET_MOVIE,
    payload: data
  }
}

export function setMoviesDetail(data){
  return {
    type: SET_MOVIE_DETAIL,
    payload: data
  }
}

export function fetchGenre(){
  return (dispatch, getState) => {
    return new Promise((res, rej) => {
      fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49", {
        method: "GET"
      })
        .then(response => response.json())
        .then((data) => {
          dispatch(setGenres(data))
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }
}

export function fetchMovie(){
  return (dispatch, getState) => {
    return new Promise((res, rej) => {
      fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=1", {
        method: "GET"
      })
        .then(response => response.json())
        .then((data) => {
          dispatch(setMoviesDetail(data))
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }
}

export function fetchMovieDetail(id){
  return (dispatch, getState) => {
    return new Promise((res, rej) => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2fccde01a371b106b09a241d6d1d5b49`, {
        method: "GET"
      })
        .then(response => response.json())
        .then((data) => {
          dispatch(setMovies(data))
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }
}