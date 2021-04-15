import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

const MY_KEY = process.env.REACT_APP_API_KEY


function MovieDetails(props) {
    const params = useParams()
    console.log(params)

    console.log(parseInt(params.movieId))
    
    const movieId = parseInt(params.movieId)

    const [movie, setMovie] = useState([])

    const getMovieDetails = async (event) => {

        
        
            const url = `https://api.tmdb.org/3/movie/${movieId}?api_key=${MY_KEY}&language=en-US`;
        
        try {
            const response = await fetch(url)
            const data  = await response.json()
            setMovie(data)
            // console.log(data.original_title)
        } catch(err) {
            console.error(err)
        }
        
    }

    useEffect(() => {
        getMovieDetails()
      }, []) // pass an empty array here.

    return (
        <div className="container-details">
            <h1>Some movie details</h1>
            {/* <h2>{props.movies[0].original_title}</h2> */}
            <h2>{params.movieId}</h2>
            <h3>{movie.original_title}</h3>
            {/* {console.log(props.movies[0].original_title)} */}
        </div>
        
    )
}

export default MovieDetails