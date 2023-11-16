import React, { useState, useEffect } from 'react'
import './Banner.css'
import requests from '../Requests'
import instance from '../Instance'
import axios from 'axios'

export default  function Banner() {
    const [movie, SetMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
           const  result = await instance.get(requests.fetchNetflixOriginals)
            SetMovie(
                result.data.results[
                Math.floor(Math.random() * result.data.results.length - 1)]
            )

        }



        fetchData()
    }, [])
    console.log("my movies" ,movie);
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"....":str;
    }


    return (
        <header className='banner' 
        style={{
            backgroundSize:"cover",
            backgroundImage:`Url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            // backgroundPosition:'center center',
            
           

         } }>
             <div className='banner_contents' >
                 <h1 className='banner_title'> {movie.name || movie.title || movie.original_name}</h1>
                

             </div>
             <div className='banner_buttons'>
                 <button className='banner_button'> Play</button>
                 <button className='banner_button'>More Info </button>
             </div>
             <h1 className='banner_description'>
                 {truncate(movie.overview,150)}

             </h1>
             <div className='banner-fade'></div>




        </header>
    )
}

