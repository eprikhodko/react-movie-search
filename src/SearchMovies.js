import React from "react";

export default function SearchMovies(){
    
    const searchMovies = async (event) => {
        event.preventDefault();
        console.log("submitting");
        
        const query = "Galaxy Quest";
        
        const url = `https://api.tmdb.org/3/search/movie?api_key=496e7112180f6c0846886cf52e631b38&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
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