import React from 'react';

export default function Ratings({ ratings }){
    if(ratings === undefined){
        return <div>Don't have ratings</div>
    }
    return(
        <ul className="ratings-list">
            <h3>Ratings</h3>
            {ratings.map( rating => 
                <li key={rating.Source}>
                    <p>{rating.Source}</p>
                    <p>{rating.Value}</p>
                </li>
            )}
        </ul>    
    );
}