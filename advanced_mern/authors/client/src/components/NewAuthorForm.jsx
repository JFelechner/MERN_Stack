
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";

const NewAuthorForm = () => {
    let [authorName, setAuthorName] = useState("")
    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const createAuthorSubmitHandler = (e) => {
        e.preventDefault();
        let formInfoObj = { authorName }
        axios.post("http://localhost:8000/api/author", formInfoObj)
            .then(res => {
                console.log("form submitted!", res)
                if (res.data.error) {
                    setFormErrors(res.data.error.errors)
                } else {
                    setAuthorName(res.data.results)
                    history.push("/")
                }
            })
            .catch(err => console.log("error insubmitting post request", err))
    }

    return (
        <>
            {/* container */}
            <div className="container px-4">

                {/* row */}
                <div className="row gx-5">

                    {/* left column */}
                    <div className="col">

                        {/* left header */}
                        <Link to={`/`}>Home</Link>
                        <p>Add a new author:</p>

                        {/* form */}
                        <div className="p-3 border bg-light">
                            <form onSubmit={createAuthorSubmitHandler}>
                                <div className="form-group">
                                    <label className="mb-2" htmlFor="">Author Name:</label>
                                    <input onChange={(e) => { setAuthorName(e.target.value) }} type="text" name="" id="" className="form-control" />
                                    <p className="text-danger">{formErrors.authorName?.message}</p>
                                </div>
                                <input type="submit" value="Add Author" className="btn btn-primary" /> &nbsp;
                                <Link to={`/`} className="btn btn-primary" >Cancel</Link>
                            </form>

                        </div>

                    </div>

                    {/* right column */}
                    <div className="col">
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewAuthorForm;
