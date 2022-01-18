import React, { useState } from 'react';

const PokemonFetch = () => {
    //state
    let [listOfPokemon, setListOfPokemon] = useState([])

    const getPokemon = () => {
        //fetch api
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            //need to turn incoming data into json so we can use it
            .then(response => {
                return response.json()
            })
            .then(response => {
                console.log("json response", response)
                setListOfPokemon(response.results)
            })
            .catch(err => {
                console.log("error", err)
            })
        console.log("button clicked")
    }

    return (
        <>
            <h3>List of Pokemon</h3>
            <p><button onClick={getPokemon} >Fetch Pokemon</button></p>

            {
                listOfPokemon.map((pokemonObj, i) => {
                    return (
                        <div>
                            <li>{pokemonObj.name}</li>
                        </div>
                    )
                }
                )
            }

        </>
    )
}

export default PokemonFetch;