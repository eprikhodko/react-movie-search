import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import "./MovieDetails.css"

const MY_KEY = process.env.REACT_APP_API_KEY


function MovieDetails() {
    const params = useParams()  
    const movieId = parseInt(params.movieId)

    const [movie, setMovie] = useState([])

    const getMovieDetails = async (event) => {

        const url = `https://api.tmdb.org/3/movie/${movieId}?api_key=${MY_KEY}&language=en-US`;
        
        try {
            const response = await fetch(url)
            const data  = await response.json()
            setMovie(data)
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getMovieDetails()
      }, []) 

    return (
        <div className="container-movie-details" style={{ 
            backgroundImage: `url("https://image.tmdb.org/t/p/w1000_and_h450_multi_faces${movie.backdrop_path}")`
          }}>
            {/* <h1>Some movie details</h1> */}
            
            <h3>{movie.original_title}</h3>
        </div>
    )
}

export default MovieDetails