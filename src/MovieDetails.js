import React, {useState, useEffect} from "react"
import {useParams, useHistory} from "react-router-dom"

import "./MovieDetails.css"

const MY_KEY = process.env.REACT_APP_API_KEY


function MovieDetails() {
    const params = useParams()  
    const movieId = parseInt(params.movieId)

    const history = useHistory()
    console.log(history)

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

      const handleClick = () => {history.goBack()}

    return (
        <div className="container-movie-details">
            
            <div className="container-movie-backdrop" style={{ 
            backgroundImage: `url("https://image.tmdb.org/t/p/w1000_and_h450_multi_faces${movie.backdrop_path}")`
          }}>

                <img className="movie-poster"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title + " poster"}
                />            
            </div>
            
            
            <div className="container-overview">
                <h2 className="title-movie-details">{movie.original_title}</h2>
                <h3 className="title-overview">Overview</h3>
                <p className="paragraph-overview">{movie.overview}</p>
                <button className="button-back" type="button" onClick={handleClick}>Back to search</button>
            </div>
            

        </div>
        

    )
}

export default MovieDetails