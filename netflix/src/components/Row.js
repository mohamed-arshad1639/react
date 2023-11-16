import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import instance from '../Instance'
import './Row.css'


function Row({ title, fetchURL,isLarge }) {

    const base_url = "https://image.tmdb.org/t/p/original/"
    const [movies, Setmovies] = useState([])
    useEffect(() => {
        async function fetchData() {

            const request = await instance.get(fetchURL)
            Setmovies(request.data.results)

        }
        fetchData()


    }, [instance])

    console.log(movies);


    return (
        <div className='row'>
             <h1>{title}</h1>
         <div className='row-posters'>
            {movies.map(movie => (
                
              
                   
                    <img
                        className={`row_poster ${isLarge&& "row_posterLrge"}`}
                        alt={movies.name}
                        key={movies.id}
                        src={`${base_url}${isLarge?movie.poster_path:movie.backdrop_path}`} />
                


            ))}
         </div>





        </div>

    )
}

export default Row