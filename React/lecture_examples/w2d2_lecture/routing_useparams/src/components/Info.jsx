
import React from 'react';
import { useParams } from "react-router";


const Info = () => {
    const { id, borderStyle="solid", fontsize=12 } = useParams();
    
    console.log(id, borderStyle,fontsize)

    return (
        <div style = {{border: `1px ${borderStyle} black`, fontSize: `${fontsize}px`}}>
            { isNaN(id)?
                <h1>This is {id}'s page. This belongs to {id}</h1>:
                <h1>Viewing the profile of person # {id}</h1>
        }
        <p>Note: you picked {borderStyle} for border and {fontsize} for font size </p>
        </div>

    );
};


export default Info;