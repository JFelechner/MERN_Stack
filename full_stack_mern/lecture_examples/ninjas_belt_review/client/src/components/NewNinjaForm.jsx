import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const NewNinjaForm = (props) => {

    //state variables for each info collected from form
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [numBelts, setNumBelts] = useState(null)
    let [isVeteran, setIsVeteran] = useState(false)

    let [formErrors, setFormErrors] = useState({})


    // const history = useHistory(); --> only need if we are redirecting back to directory from different page

    const createNinjaSubmitHandler = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, numBelts, isVeteran)

        //put the info from form into an object
        let formInfoObj = { firstName, lastName, numBelts, isVeteran };

        axios.post("http://localhost:8000/api/ninjas", formInfoObj)
            .then(res => {
                console.log("response after posting", res)

                //if the res.data.results key is there, then form validations were valid
                //if the res.data.error key is there, then form was not filled out properly 
                if (res.data.error) { //validation errors happened
                    //res.data.error.errors contains an object that has my validation error messages for each input
                    setFormErrors(res.data.error.errors)
                } else {
                    props.setNewNinjaAdded(!props.newNinjaAdded)
                    // history.push("/") --> only need if we are redirecting back to directory from different page
                }
            })
            .catch(err => console.log("error in submitting post request", err))

    }

    return (
        <div>
            <form onSubmit={createNinjaSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input onChange={(e) => { setFirstName(e.target.value) }} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.firstName?.message}</p>
                    {/* <p className="text-danger">{formErrors.firstName? formErrors.firstName.message : ""}</p> */}
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input onChange={(e) => { setLastName(e.target.value) }} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.lastName?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts</label>
                    <input onChange={(e) => { setNumBelts(e.target.value) }} type="number" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.numBelts?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Is Ninja a Veteran?</label>
                    <input onChange={(e) => { setIsVeteran(e.target.checked) }} type="checkbox" name="" id="" className="form-checkbox" />
                </div>
                <input type="submit" value="Create Ninja!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default NewNinjaForm;