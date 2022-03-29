
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const StarWarsSearch = () => {
    let [categories, setCategories] = useState([])

    //state variable for each input in this form
    let [selectedCategory, setSelectedCategory] = useState("")
    let [id, setId] = useState(null)
    
    const history = useHistory();

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(response=>{
            //console.log the response befoer doing anything else!!!!
            console.log("response--->", response)
            console.log(Object.keys(response.data)) //this gives an array of the keys from response.data (response.data has categories as keys)
            setCategories(Object.keys(response.data))
            // setSelectedCat(Object.keys(response.data)[0])
        })
        .catch(err=>{
            console.log("ERRORRRRRR ABORT!->", err)
        })
    },[])
    
    const getLore = (e) => {
        e.preventDefault();
        history.push(`/${selectedCategory}/${id}`)
    }

    return (
        <div>
            <h1>StarWars - Luke APIwalker</h1>
            <form onSubmit={getLore}>
                <p>Search for:
                    <select onChange={(e) => setSelectedCategory(e.target.value)}>
                        {
                            categories.map((cat,i)=>{
                                return(
                                    <option key = {i} value={cat}>{cat}</option>
                                )
                            })
                        }
                    </select>
                    <label htmlFor="tentacles">ID:</label>
                    <input type="number" onChange={(e) => setId(e.target.value)} id=""/>
                    <button>Search</button>
                </p>
            </form>
        </div>
    )
}

export default StarWarsSearch;