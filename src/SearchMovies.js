import React from "react";

const MY_KEY = process.env.REACT_APP_API_KEY;

export default function SearchMovies(){
    
    const searchMovies = async (event) => {
        event.preventDefault();
        console.log("submitting");
        
        const query = "Galaxy Quest";
        
        const url = `https://api.tmdb.org/3/search/movie?api_key=${MY_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const response = await fetch(url);
            const data  = await response.json();
            console.log(data);
        } catch(err){
            console.error(err);
        }
    }
    
    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Galaxy Quest"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}