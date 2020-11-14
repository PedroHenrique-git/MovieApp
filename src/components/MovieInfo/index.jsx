import React, { useEffect, useState } from 'react';
import url from '../../config/index';
import { useLocation, Link }  from 'react-router-dom';
import Ratings from '../Ratings';
import './index.scss';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

export default function MovieInfo(){
    let query = useQuery();

    const [movie,setMovie] = useState({});
    const [error,setError] = useState(null);
    const [isLoaded,setIsloaded] = useState(true);

    useEffect( () =>{
        return (
            fetch(`${url}&i=${query.get("id")}`)
            .then(response => response.json())
            .then( (result) => {
                setIsloaded(true);
                setMovie(result);    
            },
            (error) =>{
                setError(true);
                setIsloaded(false);
            })
        )
    },[query]);

    if(error){
        return <div>{error}</div>
    }else if(!isLoaded){
        return <div>Loading...</div>
    }else{
        return(
            <div className="container-movie">
                <Link className="back" to="/">Return to init</Link>
                <div className="movie__info">
                    <div className="movie__info-item-image">
                        <img src={movie.Poster} alt={movie.Poster}/>
                    </div>
                    <div className="movie__info-item">
                        <h1>Title: {movie.Title}</h1>
                        <p>Year: {movie.Year}</p>
                        <p>Rated: {movie.Rated}</p>
                        <p>Released: {movie.Released}</p>
                        <p>Runtime: {movie.Runtime}</p>
                        <p>Genre: {movie.Genre}</p>
                        <p>Director: {movie.Director}</p>
                        <p>Writer: {movie.Writer}</p>
                        <p>Actors: {movie.Actors}</p>
                        <p>Plot: {movie.Plot}</p>
                        <p>Language: {movie.Language}</p>
                        <p>Country: {movie.Country}</p>
                        <p>Awards: {movie.Awards}</p>
                        <p>Production: {movie.Production}</p>
                        <div className="ratings">
                            <Ratings ratings={movie.Ratings}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}