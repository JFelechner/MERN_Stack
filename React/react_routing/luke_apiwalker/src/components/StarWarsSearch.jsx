
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const StarWarsSearch = () => {
    const history = useHistory();
    let [textSearch, setTextSearch] = useState("people")
    let [indexSearch, setIndexSearch] = useState(null)
    
    const getLore = (e) => {
        e.preventDefault();
        history.push(`/${textSearch}/${indexSearch}`)
    }

    return (
        <div>
            <h1>StarWars APIwalker</h1>
            <form onSubmit={getLore}>
                <p>Search for:
                    <select onChange={(e) => setTextSearch(e.target.value)}>
                        <option id="people" >people</option>
                        <option id="planets">planets</option>
                    </select>
                    <label htmlFor="tentacles">ID:</label>
                    <input type="number" onChange={(e) => setIndexSearch(e.target.value)} id="[]"
                        min="1" max="100"/>
                    <button>Search</button>
                </p>
            </form>
        </div>
    )
}

export default StarWarsSearch;