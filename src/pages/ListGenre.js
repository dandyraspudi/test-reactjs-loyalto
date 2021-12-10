/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenre } from '../store/Action';

export default function ListGenre() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {genres} = useSelector(state => state);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenre())
  }, [])

  if (error) {
    return <p>There was an error loading your data!</p>
  }

  if (loading) {
    return <p>Data is loading</p>
  }

  let genreData;
  if (genres) {
    genreData = genres?.genres?.map(item => {
      return <div key={item.id} class="col-md-6 py-2 rounded border-1 hover-red d-flex align-items-center">
      <p class="ml-3 font-weight-bold">{item.name}</p>
    </div>
    })
  }

  return (
    <div class="row">
      <div class="col-md-2">
        <Sidebar/>
      </div>
      <div class="m-auto col-md-9 container">
        <h1 class="mt-5">Genres</h1>
        <div class="mt-4">
          <div class="row g-3">
            {genreData}
          </div>
        </div>
      </div>
    </div>
  )
  
}
