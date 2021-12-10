/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import {useSelector, useDispatch} from 'react-redux';
import {fetchGenre, fetchMovie} from '../store/Action'

export default function Dashboard() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {genres, movies} = useSelector(state => state);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenre())
  }, [])

  useEffect(() => {
    dispatch(fetchMovie())
  }, [])

  if (error) {
    return <p>There was an error loading your data!</p>
  }

  if (loading) {
    return <p>Data is loading</p>
  }

  let movieData;
  if (movies) {
    movieData = movies?.results?.map((item) => {
      if (item.vote_average > 7.8) {
        return <div key={item.id} class="hover-border-red col-md-12 box-top-movie mt-2 border-1 d-flex justify-content-between align-items-center">
        <h4 class="ml-3">{item.title}</h4>
        <div class="d-flex align-items-center">
          <span class="mr-5">{item.vote_average}</span>
        </div>
      </div>
      }
    })
  } else {
    <p>Loading...</p>
  }

  return (
    <div className="Dashboard">
      <div class="row">
        <div class="col-md-2">
          <Sidebar/>
        </div>
        <div class="m-auto col-md-9 container">
          <div class="main-card row mt-5">
            <div class="card text-center align-self-center py-1 px-5 mr-3 b-red">
              <span class="">
                <h4 class="text-white bolder font-weight-bold">Movies</h4>
                {/* {
                  movieData.results.length
                } */}
              </span>
            </div>
            <div class="card text-center align-self-center py-1 px-5 b-red">
              <span class="">
                <h4 class="text-white bolder font-weight-bold">Genre</h4>
                {/* {
                  data.genres.length
                } */}
              </span>
            </div>
          </div>

          <div class="row gap-5 mt-5">
            <div class="col-md-8">
              <div class="container">
                <h2 class="c-dark-grey">Top Movie</h2>
                <div class="row">
                  {
                    movieData
                  }
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-md-0 mt-4">
              <div class="container">
                <h2 class="c-dark-grey">Genres</h2>
                <div class="row mt-3 mb-3 container g-3">
                  {
                    genres?.genres?.map(item => {
                      return <div key={item.id} class="hover-red border-danger py-1 px-2 card">
                        <span class="hover-c-white c-red">{item.name}</span>
                      </div>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}