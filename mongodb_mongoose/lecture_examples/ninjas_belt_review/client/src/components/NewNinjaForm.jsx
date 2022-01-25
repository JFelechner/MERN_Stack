import React, {useState} from 'react'
import axios from 'axios'

const NewNinjaForm = () => {

    // state variables for each info collected from form
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [numBelts, setNumBelts] = useState(0)
    let [isVeteran, setIsVeteran] = useState(false)

    const createNinjaSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(firstName, lastName, numBelts, isVeteran)

        //put the info from form into object
        let formInfoObj = {firstName, lastName, numBelts, isVeteran}

        axios.post("http://localhost:8000/api/ninjas", formInfoObj)
        .then(res=>{
            console.log("response after posting", res)
        })
        .catch(err=>console.log("error insubmitting post request", err))
    }

    return (
        <div>
            <form onSubmit={createNinjaSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input onChange={(e)=>{setFirstName(e.target.value)}} type="text" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input onChange={(e)=>{setLastName(e.target.value)}} type="text" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts</label>
                    <input onChange={(e)=>{setNumBelts(e.target.value)}} type="number" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Ninja a Veteran?</label>
                    <input onChange={(e)=>{setIsVeteran(e.target.checked)}} type="checkbox" name="" id="" className="form-checkbox" />
                </div>
                <input type="submit" value="Create Ninja!" className="btn btn-success mt-3" />
            </form>
        </div>
    )
}

export default NewNinjaForm;