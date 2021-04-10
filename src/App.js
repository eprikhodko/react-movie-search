import React from "react"
import SearchMovies from "./SearchMovies"

function App() {

    return (
        <>
            <Header />
            <div className="container">
                <SearchMovies />
            </div>
        </>
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