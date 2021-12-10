import { SET_GENRE, SET_MOVIE, SET_MOVIE_DETAIL, SET_ISERROR, SET_ISLOADING } from './ActionType'

const initialState = {
  genres: [],
  movies: [],
  movieDetail: [],
  isLoading: true,
  isError: false
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case SET_GENRE:
      return {...state, genres: action.payload}
    case SET_MOVIE:
      return {...state, movies: action.payload}
    case SET_MOVIE_DETAIL:
      return {...state, movieDetail: action.payload}
    case SET_ISERROR:
      return {...state, isError: action.payload}
    case SET_ISLOADING:
      return {...state, isLoading: action.payload}
    default:
      return state
  }
}