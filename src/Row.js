import "./Row.css";
import axios from './axios';
import React, {useEffect,useState} from 'react';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url="https://image.tmdb.org/t/p/original/";
const url="https://image.tmdb.org/t/p/original//e3NBGiAifW9Xt8xD5tpARskjccO.jpg";
function Row({title, fetchURL ,isLargeRow}) {
    
    const [movies, setMovies]= useState([]);
    const [trailerUrl, setTrailerUrl]=useState("");
    useEffect(()=>{
    async function fetchData() {
        const request =await axios.get(fetchURL);

        setMovies(request.data.results); 

        return request;
    }
        fetchData();}
    ,[fetchURL]);
    console.log(movies);
   
    const handleClick = (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          movieTrailer(movie?.title || movie?.name || movie?.original_name)
            .then((url) => {
              
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v"));
              
            })
            .catch((error) => console.log(error));
        }
      };
    console.log(trailerUrl)
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies.map((movie) => {
                return (
                    <img
                    
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                    onClick={() => handleClick(movie)}
                    />);
                })}
            </div>
            <div style={{padding:"20px"}}>
                {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>} */}
                {trailerUrl && (<iframe src={`https://www.youtube.com/embed/${trailerUrl}`} title="YouTube Trailer" allow="autoplay ; encrypted-media"
                       allowFullScreen allowFullScreen height="300" width='100%'
         ></iframe>)}
            </div>
        </div>
    );
    
        
    
    
                    

}


export default Row;