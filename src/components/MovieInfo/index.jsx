import React, { useEffect, useState } from 'react';
import url from '../../config/index';
import { useLocation, Link }  from 'react-router-dom';
import Ratings from '../Ratings';
import { AiOutlineArrowLeft} from 'react-icons/ai';
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
                <Link className="back" to="/">
                    <AiOutlineArrowLeft />
                </Link>
                <div className="movie__info">
                    <div className="movie__info-item-image">
                        <img src={movie.Poster} alt={movie.Poster}/>
                    </div>
                    <div className="movie__info-item">
                        <p><span>Title:</span> {movie.Title}</p>
                        <p><span>Year:</span> {movie.Year}</p>
                        <p><span>Rated:</span> {movie.Rated}</p>
                        <p><span>Released:</span> {movie.Released}</p>
                        <p><span>Runtime:</span> {movie.Runtime}</p>
                        <p><span>Genre:</span> {movie.Genre}</p>
                        <p><span>Director:</span> {movie.Director}</p>
                        <p><span>Writer:</span> {movie.Writer}</p>
                        <p><span>Actors:</span> {movie.Actors}</p>
                        <p><span>Plot:</span> {movie.Plot}</p>
                        <p><span>Language:</span> {movie.Language}</p>
                        <p><span>Country:</span> {movie.Country}</p>
                        <p><span>Awards:</span> {movie.Awards}</p>
                        <p><span>Production:</span> {movie.Production}</p>
                        <div className="ratings">
                            <Ratings ratings={movie.Ratings}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}