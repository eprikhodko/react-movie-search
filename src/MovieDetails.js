import React from "react"
import {useParams} from "react-router-dom"

function MovieDetails(props) {
    const params = useParams()
    console.log(params)

    console.log("here is movies array")
    console.log(props.movies)

    console.log(params.movieId)
    console.log(parseInt(params.movieId))

    console.log(props.movies.find(movie => movie.id === parseInt(params.movieId)))

    const thisMovie = props.movies.find(movie => movie.id === parseInt(params.movieId))

    console.log(thisMovie)
    console.log(thisMovie.original_title)

    return (
        <div className="container-details">
            <h1>Some movie details</h1>
            {/* <h2>{props.movies[0].original_title}</h2> */}
            <h2>{params.movieId}</h2>
            <h3>{thisMovie.original_title}</h3>
            {/* {console.log(props.movies[0].original_title)} */}
        </div>
        
    )
}

export default MovieDetails