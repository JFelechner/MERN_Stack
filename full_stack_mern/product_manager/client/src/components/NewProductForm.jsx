import React, {useState} from 'react'
import axios from 'axios'
import { PromiseProvider } from 'mongoose'
import { useHistory } from "react-router-dom";

const NewProductForm = (props) => {

    let [title, setTitle] = useState("")
    let [price, setPrice] = useState(null)
    let [description, setDescription] = useState("")
    let [formErrors, setFormErrors] = useState({})

    const createProductSubmitHandler = (e)=>{
        e.preventDefault();
        let formInfoObj = {title, price, description}
        axios.post("http://localhost:8000/api/products", formInfoObj)
        .then(res=>{
            console.log("form submitted!", res)
            if(res.data.error){
                setFormErrors(res.data.error.errors)
            }else{
                props.setNewProductAdded(!props.newProductAdded)
            }
        })
        .catch(err=>console.log("error insubmitting post request", err))
    }

    return (
        <div>
            <form onSubmit={createProductSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input onChange={(e)=>{setPrice(e.target.value)}} type="number" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input onChange={(e)=>{setDescription(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <input type="submit" value="Add Product" className="btn btn-success mt-3" />
            </form>
        </div>
    )
}

export default NewProductForm;