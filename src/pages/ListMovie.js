/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMovie} from '../store/Action';

export default function ListGenre() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {movies} = useSelector(state => state);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchMovie())
  }, [])

  const detail = (id) => {
    navigate(`/listmovies/detailmovie/${id}`)
  }

  if (error) {
    return <p>There was an error loading your data!</p>
  }

  if (loading) {
    return <p>Data is loading</p>
  }

  let movieData;
  if (movies) {
    movieData = movies?.results?.map((item) => {
      return <div key={item.id} class="col-md-12 py-3 rounded mt-1 border d-flex justify-content-between align-items-center">
        <p class="ml-3 font-weight-bold w-75">{item.title}</p>
        <p class="ml-3 font-weight-bold w-75 text-center">Genre</p>
        <p class="ml-3 font-weight-bold w-75">{item.release_date}</p>
        <p class="ml-3 font-weight-bold w-75">{item.vote_average}</p>
        <div>
          <button class="btn b-red text-white px-4" onClick={() => detail(item.id)}>Detail</button>
        </div>
      </div>
    })
  }

  return (
    <div class="row">
      <div class="col-md-2">
        <Sidebar/>
      </div>
      <div class="m-auto col-md-9 container">
        <h1 class="mt-5">Movies</h1>
        <div class="row">
          {movieData}
        </div>
      </div>
    </div>
  )
  
}
