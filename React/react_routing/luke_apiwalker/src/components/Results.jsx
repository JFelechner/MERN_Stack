
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router";

const Results = () => {
    let { textId, indexId } = useParams();
    let [listOfLoreObjects, setListOfLoreObjects] = useState({})
    let [invalid, setInvalid] = useState(false)

    useEffect(() => {
        console.log("in use effect", textId, indexId)
        if (textId !== undefined && indexId !== 'null') {
            setInvalid(false);
            console.log("If Statement")
            axios.get(`https://swapi.dev/api/${textId}/${indexId}`)
                .then(response => {
                    console.log(response.data)
                    setListOfLoreObjects(response.data)
                })
                .catch(err => {
                    console.log("error", err)
                })
        }else{
            //either the category or the id is invalid so we cannot make an api call and get data
            setInvalid(true);
        }
        
    }, [textId, indexId]) // indicates which variables should run again in useEffect()

    const displayError = () => {
        return (
            <>
                <p>Please enter a ID value</p>
            </>
        )
    }
    const displayPeople = () => {
        return (
            <>
                <h3>{listOfLoreObjects.name}</h3>
                <p>Height: {listOfLoreObjects.height}"</p>
                <p>Mass: {listOfLoreObjects.mass}kg</p>
                <p>Hair Color: {listOfLoreObjects.hair_color}</p>
                <p>Skin Color: {listOfLoreObjects.skin_color}</p>
            </>
        )
    }
    const displayPlanets = () => {
        return (
            <>
                <h3>{listOfLoreObjects.name}</h3>
                <p>Terrain: {listOfLoreObjects.terrain}</p>
                <p>Surface Water: {listOfLoreObjects.surface_water}</p>
                <p>Population: {listOfLoreObjects.population}</p>
            </>
        )
    }

    return ( // this is the main return ststement. it holds the logic for which category should be displayed
        <>
            {
                invalid === true?
                    displayError():
                textId === "people"?
                    displayPeople() :
                textId ==='planets'?
                    displayPlanets():
                    ""
            }
        </>
    )

}

export default Results;