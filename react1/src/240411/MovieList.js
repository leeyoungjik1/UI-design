import React from "react";
import Movie from "./Movie";

function MovieList({movies}){
    return (
        <>
            {movies.length > 0 && movies.map((movie, id) => {
                return (
                    <Movie
                        key={id}
                        {...movie}
                    >
                        <h3>자식요소1</h3>
                        <h3>자식요소2</h3>
                        <h3>자식요소3</h3>
                    </Movie>
                )
            })}
        </>
    )
}
export default MovieList