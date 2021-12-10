/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/style.css';
import {useHistory, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMovieDetail} from '../store/Action';

export default function ListGenre() {
  const {movieDetail} = useSelector(state => state);
  const dispatch = useDispatch();
  const {idMovie} = useParams();
  
  useEffect((idMovie) => {
    dispatch(fetchMovieDetail(idMovie))
  }, [])

  return (
    <div class="container">
      <div class="mt-5">
        <h1 class="text-center">Detail Movie</h1>
        <div class="row container mt-5">
          <div class="col-md-6">
            <div>
              <Link to="/listmovies" class="c-red">
                /list movie/detail
              </Link>
            </div>
            <img class="w-100 rounded" src={'https://cdn.pixabay.com/photo/2016/11/29/09/24/swan-1868697__340.jpg'} alt="image movie"/>
          </div>
          <div class="col-md-6">
            <div class="row g-3 mt-3 mb-3 container">
              <div class="hover-red border-danger py-1 px-2 card">
                <span class="hover-c-white c-red">Action</span>
              </div>
              <div class="hover-red border-danger py-1 px-2 card">
                <span class="hover-c-white c-red">Thriller</span>
              </div>
              <div class="hover-red border-danger py-1 px-2 card">
                <span class="hover-c-white c-red">Drama</span>
              </div>
            </div>
            <div class="d-flex">
              <h5 class="mr-2">Rating </h5>
              <p>1234</p>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, incidunt facilis doloremque iusto tempora beatae explicabo rerum praesentium. Nemo, a natus officia rerum quidem consectetur quibusdam nostrum! Dolores nisi, quasi maiores saepe facilis blanditiis possimus.
            </p>
            <p>
              Realese date <span class="c-red">12/03/2019</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  
}
