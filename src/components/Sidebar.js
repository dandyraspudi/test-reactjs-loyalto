/* eslint-disable react/style-prop-object */
import React from "react"
import {Link} from 'react-router-dom'
import '../assets/styles/style.css'

export default function Sidebar() {

  return (
    <div class="sidebar d-flex align-items-center b-dark-grey">
      <div class="w-100 h-100">
        <h4 class="text-white d-none d-md-block text-center align-self-start mt-5">CMS - <span class="c-red">MOVIES</span></h4>
        <div class="d-flex align-items-center h-75">
          <div class="d-md-block d-flex justify-content-center w-100">
            <Link to="/" class="link text-white">Dashboard</Link>
            <Link to="/listmovies" class="link text-white">List Movie</Link>
            <Link to="/listgenre" class="link text-white">List Genre</Link>
          </div>
        </div>
        <p class="text-white d-none d-md-block text-center align-self-end mt-5">Dandy Raspudi - 2021</p>
      </div>
    </div>
  )
}