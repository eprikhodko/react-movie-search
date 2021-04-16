import React from "react"
import {Link} from "react-router-dom"


function SearchMovies({movies, searchMovies, query, handleChange}) {

    const movieCards = movies.filter(movie => movie.poster_path).map(movie => (
            <div className="movie-card" key={movie.id}>
                <Link to={`/${movie.id}`}>
                    <img className="movie-card-image"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + " poster"}
                    />
                </Link>
                
                <div className="movie-info">
                    <h2 className="movie-title">
                        <Link to={`/${movie.id}`}>{movie.title}</Link>
                    </h2>
                    <p className="release-date">Release year: {movie.release_date.slice(0, 4)}</p>
                    <p className="movie-overview">{movie.overview}</p>
                </div>
            </div>
        ))
  
    return (
        <div className="container-search">
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input 
                    className="search-input" 
                    type="text" 
                    name="query"
                    placeholder="i.e. Star Wars" 
                    value={query} 
                    onChange={handleChange}
                />
                <button className="search-button" type="submit">Search</button>
            </form>

            <div className="search-results">
                {movieCards}
            </div>    
        </div>
    )
}

export default SearchMovies