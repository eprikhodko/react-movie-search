import React, {useState} from "react";

const MY_KEY = process.env.REACT_APP_API_KEY;

export default function SearchMovies() {
    
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);


    // Search movies
    const searchMovies = async (event) => {
        // prevent page reload after clicking Search button
        event.preventDefault();
        
        // check if search field is empty
        if (query) {
            const url = `https://api.tmdb.org/3/search/movie?api_key=${MY_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const response = await fetch(url);
            const data  = await response.json();
            setMovies(data.results);
        } catch(err) {
            console.error(err);
        }

        // clear search field after clicking Search button
        setQuery("")
        }
    }


    return (
        <div className="search-movies-component">
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input 
                    className="search-input" 
                    type="text" 
                    name="query"
                    placeholder="i.e. Star Wars" 
                    value={query} 
                    onChange={(event) => {
                        setQuery(event.target.value)
                        }
                    }
                />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="card-list">
                
               
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="movie-card" key={movie.id}>
                        <img className="movie-card-image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + " poster"}
                        />
                        <div className="movie-card-content">
                            <h3 className="movie-card-title">{movie.title}</h3>
                            <p className="release-date">Release year: {movie.release_date.slice(0, 4)}</p>
                            

                            {/* <p>Rating: {movie.vote_average}</p> */}
                            <p className="movie-card-description">{movie.overview}</p>
                        </div>
                    </div>
                ))}

            </div>    
        </div>
        
    )
}