import React, {useState} from "react"
import SearchMovies from "./SearchMovies"
import MovieDetails from "./MovieDetails"

import {Switch, Route, Link} from "react-router-dom"

const MY_KEY = process.env.REACT_APP_API_KEY

function App() {

    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])

    const handleChange = event => {
        // console.log(event.target.value)
        return setQuery(event.target.value)
    }

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
        <div>
            
            <Link to={`/`}>
                <Header />
            </Link>
            
            <Switch>
                    <Route exact path="/">
                        <div className="container">
                            <SearchMovies 
                                handleChange={handleChange}
                                query={query}
                                searchMovies={searchMovies}
                                movies={movies}
                            />
                        </div>
                    </Route>
                    <Route exact path={`/:movieId`}>
                        <MovieDetails />
                    </Route>
            </Switch>
        </div>
    )
}

function Header() {
    return (
        <header>
            <h1 className="site-title">React Movie Search</h1>
        </header>
    )
}

export default App