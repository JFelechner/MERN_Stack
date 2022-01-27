import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";

const EditAuthorForm = () => {
    const { id } = useParams();

    let [formErrors, setFormErrors] = useState({})
    let [authorInfo, setAuthorInfo] = useState({
        authorName: ""
    })
    let [authorNotFound, setAuthorNotFound] = useState(false) // StateVariable to display alternate message

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                //the res object will have the key error in  res.data.error if the id is not in db.
                //if the id is in db, the res object will have key results in res.data.results
                //if res.data.error then we will set some state variable (notFound) to be true. an din the jsx if the notFound show the error paragrapth . otherwise show the authorInfo  
                console.log(res)
                if(res.data.results ){  //if the id exists
                    console.log("response is this-->", res)
                    setAuthorInfo(res.data.results)
                } else{ //if the key error exists in res.data-> that means that the id is not in db
                    setAuthorNotFound(true)
                }
            })
            .catch(err => console.log(err))
    }, [])

    const history = useHistory();

    const changeHandler = (e) => {
        console.log("change recorded")
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }

    const updateAuthorSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`, authorInfo)
            .then(res => {
                console.log("res after put request-->", res)
                if (res.data.error) {
                    setFormErrors(res.data.error.errors)
                } else {
                    history.push(`/`)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>

            {
                authorNotFound? // IF STATEMENT
                <>
                    <p className="ms-4 text-danger">We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database? <Link to={`/author/new`}>Add Author</Link></p>
                    
                </>
                


                : // ELSE STATEMENT --> re-route
                <>
                    {/* container */}
                    <div div className="container px-4">
    
                        {/* row */}
                        <div className="row gx-5">
    
                            {/* left column */}
                            <div className="col">
    
                                {/* left header */}
                                <Link to={`/`}>Home</Link>
                                <p className="text-$purple">Edit this author:</p>
    
                                {/* form */}
                                <div className="p-3 border bg-light">
                                    <form onSubmit={updateAuthorSubmitHandler}>
                                        <div className="form-group">
                                            <label className="mb-2" htmlFor="">Author Name:</label>
                                            <input onChange={changeHandler} type="text" name="authorName" className="form-control" value={authorInfo.authorName} />
                                            <p className="text-danger">{formErrors.authorName?.message}</p>
                                        </div>
                                        <input type="submit" value="Update Author" className="btn btn-primary" /> &nbsp;
                                        <Link to={`/`} className="btn btn-primary">Cancel</Link>
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
            }

        </div>
    )

};

export default EditAuthorForm;