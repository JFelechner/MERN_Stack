
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router";

const Results = () => {
    const { category, id } = useParams();
    let [listOfLoreObjects, setListOfLoreObjects] = useState({})

    useEffect(() => {
            axios.get(`https://swapi.dev/api/${category}/${id}`)
                .then(response => {
                    console.log(response.data)
                    setListOfLoreObjects(response.data)
                })
                .catch(err => {
                    console.log("error", err)
                })
    }, [category, id]) // indicates which variables should run again in useEffect()



    return ( // this is the main return ststement. it holds the logic for which category should be displayed
        <div>
            {
                category === "people"?
                    <>
                    <h1>Name: {listOfLoreObjects.name}</h1>
                    <p>Height: {listOfLoreObjects.height}</p>
                    <p>Mass: {listOfLoreObjects.mass}</p>
                    </>
                : category === "planets"?
                    <>
                    <h1>Name: {listOfLoreObjects.name}</h1>
                    <p>Climate: {listOfLoreObjects.climate}</p>
                    <p>Terrain: {listOfLoreObjects.terrain}</p>
                    </>
                : category === "starships"?
                <>
                    <h1>Name: {listOfLoreObjects.name}</h1>
                    <p>Model: {listOfLoreObjects.model}</p>
                    <p>Manufactureer: {listOfLoreObjects.manufacturer}</p>
                    </>
                : 
                <>
                    <h1>These are not the droids you're looking for</h1>
                    <img src="https://www.denofgeek.com/wp-content/uploads/2021/06/star-wars-revenge-of-the-sith-obi-wan-lucasfilm.jpg?resize=768%2C432" alt="" />
                </>
            }
            
        </div>
    )

}

export default Results;