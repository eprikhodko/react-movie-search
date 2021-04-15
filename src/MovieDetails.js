import React from "react"
import {useParams} from "react-router-dom"

function MovieDetails(props) {
    const params = useParams()
    console.log(params)
    return (
        <div className="container-details">
            <h1>Some movie details</h1>
            {/* <h2>{props.movies[0].original_title}</h2> */}
            <h2>{params.movieId}</h2>
            {/* <h3>{props.movies[params.movieId].original_title}</h3> */}
            {/* {console.log(props.movies[0].original_title)} */}
        </div>
        
    )
}

export default MovieDetails