import React, { useEffect, useState } from 'react'
import './main.scss';
import requests from '../../Requests';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


export const Main = () => {
  const [movies, setMovies] = useState([]) //array of movies

  const movie = movies[Math.floor(Math.random() * movies.length)];
  

  useEffect(()=> {
    axios.get(requests.requestPopular).then((response) =>{
      setMovies(response.data.results);    
    })
  },[])
 


const truncateString = (string, num) =>{
    if (string?.length > num){
      return string.slice(0, num) + '...';
    } else {
      return string;
    }
}  

  return (
    <div className='featured'>
      <div className='background-effect'></div>
        <img 
          width='100%'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          />
          <div className='info'>
            <h1 className='movie-title'>{movie?.title}</h1>
            <div className='buttons'>
             
                <Button className='play'><span className="material-symbols-rounded">play_circle</span>Play</Button>
                <Button className='more'><span className="material-symbols-rounded">info</span>More info</Button>
            </div>
            <p className='desc col-md-8 col-lg-6 col-xl-4'>{truncateString(movie?.overview, 150)}</p>
          </div>
    </div>
  )
}
