import React, {useState} from "react";

const MY_KEY = process.env.REACT_APP_API_KEY;

export default function SearchMovies() {
    
    const [query, setQuery] = useState('');
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
        setQuery('')
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
                        console.log(query)
                        }
                    }
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.map(movie => movie.title)}
            </div>
        </div>
        
    )
}