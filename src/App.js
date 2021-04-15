import React from "react"
import SearchMovies from "./SearchMovies"
import MovieDetails from "./MovieDetails"

import {Switch, Route} from "react-router-dom"

function App() {

    return (
        <div>
            <Header />
            <div className="container">
                <SearchMovies />
            </div>

            <Switch>
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
            <h1 className="title">React Movie Search</h1>
        </header>
    )
}

export default App