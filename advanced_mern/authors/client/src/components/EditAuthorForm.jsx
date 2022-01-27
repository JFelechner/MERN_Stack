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

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log("response is this-->", res)
                setAuthorInfo(res.data.results)
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
        <>
            {/* container */}
            <div className="container px-4">

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
                                    <input onChange={changeHandler} type="text" name="authorName" className="form-control" value={authorInfo.authorName}/>
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
    )

};

export default EditAuthorForm;