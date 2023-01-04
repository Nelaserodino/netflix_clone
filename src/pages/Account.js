import React, { useEffect, useState } from 'react'
import { SavedShows } from '../components/savedShows/SavedShows'
import { Row } from '../components/row/Row';
import requests from '../Requests'
import axios from 'axios';
import Movie from '../components/movie/Movie';


export const Account = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(()=> {
    axios.get (`${requests.requestSearch}=${query}`).then((response) => {
        setMovies(response.data.results)
        console.log(movies);
 })
}, [`${requests.requestSearch}=${query}`])

  const handleChange = (e) => {
    setQuery(e.target.value);
    setShow(false);
  }
  
  const handleSearchButton = (e) => {
    e.preventDefault();
    setShow(true);
  }

  return (
    <div className='bg-black'>
    <div className='w-full text-white'>
      <img
        className='w-full h-[400px] object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='/'
      />
      <div className='bg-black/60 absolute top-0 left-0 w-full h-[400px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>Search Movie</h1>
        <form 
          className="container mb-4"
          >
        <input
          className='text-black p-1'
          type="text"
          placeholder="Search movie"
          name='query'
          onChange={handleChange}
        />
        <button 
          className="btn btn-danger ml-2"
          type='submit'
          onClick={handleSearchButton}
          >
          Search</button>
      </form>
      </div>
    </div>
    {show ? 
      <>
       {movies.map((item, id) => (
                    <Movie item={item} key={id}/>
                ))}
      </>
      : 
      <>
      <SavedShows />
      <Row rowID={1} title='Up Coming' fetchURL={requests.requestUpcoming}/>
      <Row rowID={2} title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowID={3} title='Trending' fetchURL={requests.requestTrending}/>
      <Row rowID={4} title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row rowID={5} title='Horror' fetchURL={requests.requestHorror}/>
      </>
      }
    
  </div>
  )
}
