
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";

const EditProductForm = (props) => {

    const { id } = useParams();

    let [formErrors, setFormErrors] = useState({})

    let [productInfo, setProductInfo] = useState({
        title: "",
        price: 0,
        description: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log("response is this-->", res)
                setProductInfo(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    const history = useHistory();

    const changeHandler = (e) => {
        console.log("change recorded")
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    const updateProductSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, productInfo)
            .then(res => {
                console.log("res after put request-->", res)
                if(res.data.error){
                    setFormErrors(res.data.error.errors)
                }else{
                    history.push(`/products/${id}`)
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h4>Update Product Below</h4>
            <form onSubmit={updateProductSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input onChange={changeHandler} type="text" name="title" className="form-control" value={productInfo.title} />
                    <p className="text-danger">{formErrors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input onChange={changeHandler} type="number" name="price" className="form-control" value={productInfo.price} />
                    <p className="text-danger">{formErrors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input onChange={changeHandler} type="text" name="description" className="form-control" value={productInfo.description} />
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <input type="submit" value="Update Product" className="btn btn-success mt-3" />
            </form>
            <br />
            <Link to={`/products/${id}`} className="" >Cancel</Link>
        </div>
    )

};

export default EditProductForm;