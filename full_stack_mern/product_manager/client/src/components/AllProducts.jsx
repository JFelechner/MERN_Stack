import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    Link
} from "react-router-dom";

const AllProducts = (props) => {
    let [allProducts, setAllProducts] = useState([])
    let [deleted, setDeleted] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log("getting all products -->", res)
                setAllProducts(res.data.results)
            })
            .catch(err => console.log("Error", err))
    }, [deleted, props.newProductAdded])

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                console.log("res when deleting->", res)
                setDeleted(!deleted)
            })
            .catch(err => console.log("ERROR", err))
    }


    return (
        <>
            <h1>All Products:</h1>
            {allProducts.map((productObj, i) => {
                return (
                    <div key={i}>
                        <h4>
                            <Link to={`/products/${productObj._id}`}>{productObj.title}</Link> | &nbsp;
                            <button onClick={() => deleteProduct(productObj._id)} className="btn btn-sm btn-danger" >Delete</button>
                        </h4> 
                    </div>
                )
            })}
        </>
    )
}

export default AllProducts;