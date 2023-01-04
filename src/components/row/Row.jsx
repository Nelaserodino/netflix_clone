import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from '../movie/Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './row.scss';


export const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        axios.get (fetchURL).then((response) => {
            setMovies(response.data.results)
     })
    }, [fetchURL])

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-2'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft 
                onClick={slideLeft}
                className='hover hover-left hidden group-hover:block' 
                size={40}/>
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id) => (
                    <Movie item={item} key={id}/>
                ))}
            </div>
            <MdChevronRight 
                onClick={slideRight}
                className='hover hover-right hidden group-hover:block' 
                size={40}/>
        </div>
    </>
  )
}
