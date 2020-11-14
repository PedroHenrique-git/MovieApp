import React from 'react';

export default function Form({ handleSubmit,handleChange,value }){
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="nameMovie">
                <input onChange={handleChange} value={value} type="text" id="nameMovie"/>
            </label> 
            <input type="submit" value="Search movie"/>   
        </form>
    );
};