import React, { useState } from 'react';
import axios from "axios";

const PokemonFetchAxios = () => {
    let [listOfPokemon, setListOfPokemon] = useState([])

    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
                console.log(response.data)
                setListOfPokemon(response.data.results)
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
                        <div key={i}>
                            <li>{pokemonObj.name}</li>
                        </div>
                    )
                }
                )
            }

        </>
    )
}

export default PokemonFetchAxios;