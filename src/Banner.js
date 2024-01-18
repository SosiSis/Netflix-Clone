import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from './requests';
import axios from './axios';

function Banner() {
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);

        const randomIndex = Math.floor(Math.random() * request.data.results.length);
        setMovies(request.data.results[randomIndex]);
        console.log(movie);

        return request;
    }
    fetchData();} 
    , []);
    function truncate(str,n){
        return str?.lengh > n ? str.substr(0,n-1) + "..." : str        }
    return (
    <header
            className="banner"
            style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
            
        }} >

        <div className="banner__contents">
        <h1 className="banner__title">
            {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className="banner__fadeBotton" />
    </header>

  )
}

export default Banner