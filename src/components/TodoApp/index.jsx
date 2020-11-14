import React, { useState } from 'react';
import Form from '../Form';
import url from '../../config/index';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft} from 'react-icons/ai';
import './index.scss';

console.log(url);

export default function TodoApp() {

    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsloaded] = useState(true);
    const [inputValue,setInputValue] = useState('');
        
    async function getMovies(e){
        e.preventDefault();
        fetch(`${url}&s=${inputValue}`)
        .then(response => response.json())
        .then(
            (result) => {
                setIsloaded(true);
                setMovies(result);
            },
            (error) => {
                setError(true);
                setIsloaded(false);
            }
        )

        setInputValue('');
    }

    if(error){

        return <div className="error">
                    <Link className="back" onClick={() => setMovies([])} to="/">
                        <AiOutlineArrowLeft />
                    </Link><br/>
                    <p>Error</p>
                </div>

    }else if(!isLoaded){

        return <div className="isloaded">
                    <p>Loading...</p>
                </div>

    }else if(movies.Error){

        return(
            <div className="movies-errors">
                <Link className="back" onClick={() => setMovies([])} to="/">
                    <AiOutlineArrowLeft />
                </Link><br/>
                <p>{movies.Error}</p>
            </div>
        );

    }else if(movies.Search !== undefined){

        return(
            <div className="container-movies">
                <Link className="back" onClick={() => setMovies([])} to="/">
                    <AiOutlineArrowLeft />
                </Link>
                <ul>
                    { movies.Search.map(movie =>
                        <li key={movie.imdbID}>
                            <Link to={`/MovieInfo?id=${movie.imdbID}`}>
                                <img src={movie.Poster} alt={movie.Title} />
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        );

    }else{

        return(
            <div className="container">
                <Form 
                    handleSubmit={(e) => getMovies(e)}
                    handleChange={(e) => setInputValue(e.target.value)} 
                    value={inputValue}
                />
            </div>
        );

    } 
}