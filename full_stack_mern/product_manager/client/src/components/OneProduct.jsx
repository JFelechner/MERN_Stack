import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const OneProduct = () => {
    const {id} = useParams();
    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log("Request for one product", res)
            setProductDetails(res.data.results)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <>
        <h2>{productDetails.title}</h2>
        <p>Price: ${productDetails.price}</p>
        <p>Details: {productDetails.description}</p>
        </>
    )
}

export default OneProduct;