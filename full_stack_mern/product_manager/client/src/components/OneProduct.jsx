import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";

const OneProduct = () => {
    const {id} = useParams();
    const history = useHistory();
    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log("Request for one product", res)
            setProductDetails(res.data.results)
        })
        .catch(err => console.log(err))
    }, [])

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log("Product deleted", res)
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <>
        <h2>{productDetails.title}</h2>
        <p>Price: ${productDetails.price}</p>
        <p>Details: {productDetails.description}</p>
        <Link to={"/"} className = "btn btn-sm btn-info" >Home</Link> &nbsp;
        <Link to={`/products/${id}/edit`} className = "btn btn-sm btn-warning" >Edit</Link> &nbsp;
        <button onClick={deleteProduct} className="btn btn-sm btn-danger" >Delete</button>
        </>
    )
}

export default OneProduct;