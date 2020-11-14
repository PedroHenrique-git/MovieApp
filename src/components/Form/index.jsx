import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './index.scss';

export default function Form({ handleSubmit,handleChange,value }){
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="nameMovie">
                <input autoComplete="off" onChange={handleChange} value={value} type="text" id="nameMovie"/>
            </label>
            <button type="submit">
                <FaSearch />
            </button>
        </form>
    );
};