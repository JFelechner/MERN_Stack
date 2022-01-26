import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    Link
} from "react-router-dom";

const AllProducts = () => {
    let [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log("getting all products -->", res)
                setAllProducts(res.data.results)
            })
            .catch(err => console.log("Error", err))
    }, [])


    return (
        <>
            <h1>All Products:</h1>
            {allProducts.map((productObj, i) => {
                return (
                    <>
                        <p><Link to={`/products/${productObj._id}`}>{productObj.title}</Link></p>
                    </>
                )
            })}
        </>
    )
}

export default AllProducts;