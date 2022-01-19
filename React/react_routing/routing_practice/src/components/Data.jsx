
import React from 'react';
import { useParams } from "react-router";


const Data = () => {
    const { id, backgroundColor, color } = useParams();


    return (
        <div style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}>
            {isNaN(id)?
                <h1>The word is: {id}</h1>:
                <h1>The number is: {id}</h1>
            }
        </div>
    );
}


export default Data;