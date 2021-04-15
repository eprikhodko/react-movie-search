import React from "react"
import {useParams} from "react-router-dom"

function MovieDetails(props) {
    const params = useParams()
    console.log(params)
    return (
        <h1>Some movie details</h1>
    )
}

export default MovieDetails