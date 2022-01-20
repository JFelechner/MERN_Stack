import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoCoinsUsingAxiosAndUseEffect = () => {

    //create a state variable to store the array of coins inside so that we can loop through this array and display each coin on the page
    let [listOfCoins, setListOfCoins] = useState([])

    let [clicked, setClicked] = useState(false)

    //state variable to keep track of search term thats being typed
    let [searchTerm, setSearchTerm] = useState('')

    //random coin
    let [randomCoin, setRandomCoin] = useState({})

    //useEffect is used to tell the application what code to run initially upon the initial render of the component only. useEffect() takes in a callback function. 
    //A callback function is a function that is given as an input to another function. useEffect will run this call back function on the initial render of the component and thats it (unless otherwise indicated)
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            //.then means what to do when we eventually get the response back
            .then(response => {
                console.log("loggin the response--->", response)
                setListOfCoins(response.data)
                
                //get a random index number from our array of coins- between 0 to listOfCoins.length
                function getRandomInt(max) {
                    return Math.floor(Math.random() * max);
                }

                let randomIdx = getRandomInt(response.data.length);
                console.log("random index of our list of coins!!", response.data[randomIdx])
                setRandomCoin(response.data[randomIdx])
            })
            //.catch will run if there are any errors in the api that we are getting information from
            .catch(err => {
                console.log("errorrr!!!-->", err)
            })
    }, [clicked]) //<--if this dependency array is empty, it is saying to only run the callback function inside of useEffect once on the first render of the component only.

    return (
        <>
            <h3>Hello from crypto component</h3>
            <button onClick={() => setClicked(!clicked)}>Get new updated info!!</button>

            <p>Search A Coin: <input onChange={(e) => setSearchTerm(e.target.value)} type="text" name="" id="" placeholder='Search...' /></p>
            <p>Here is a random coin: {randomCoin.name}</p>
            {
                listOfCoins.filter((coinObj, i) => {
                    return coinObj.name.toLowerCase().includes(searchTerm.toLowerCase())
                }).map((coinObj, i) => {
                    return (
                        <div key={i} style={{ border: "1px solid black" }}>
                            <h3>{coinObj.name}</h3>
                            <p>Price: {coinObj.current_price}</p>
                            <img src={coinObj.image} alt="" />
                        </div>
                    )
                })
            }
        </>
    )
}

export default CryptoCoinsUsingAxiosAndUseEffect;