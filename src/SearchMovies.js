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
                    className="input" 
                    type="text" 
                    name="query"
                    placeholder="i.e. Star Wars" 
                    value={query} 
                    onChange={(event) => {
                        setQuery(event.target.value)
                        }
                    }
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">

                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + " poster"}
                        />
                        <div className="card--content">
                            <h3 className="card--title">{movie.title}</h3>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}</small></p>
                            <p className="card--desc">{movie.overview}</p>
                        </div>
                    </div>
                ))}

            </div>    
        </div>
        
    )
}