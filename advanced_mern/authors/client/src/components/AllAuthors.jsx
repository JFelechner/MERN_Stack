
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    Link
} from "react-router-dom";

const AllAuthors = () => {
    let [allAuthors, setAllAuthors] = useState([])
    let [deleted, setDeleted] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log("getting all authors -->", res)
                setAllAuthors(res.data.results)
            })
            .catch(err => console.log("Error", err))
    }, [deleted])

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/author/${authorId}`)
            .then(res => {
                console.log("res when deleting->", res)
                setDeleted(!deleted)
            })
            .catch(err => console.log("ERROR", err))
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
                        <Link to={`/author/new`}>Add an Author:</Link>
                        <p>We have quotes by:</p>


                        {/* table */}
                        <table className="table table-bordered border-dark table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col">Authors</th>
                                    <th scope="col">Actions available</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* mapping */}
                                {/* map and key need to be inside table to create more rows instead of making new table everytime */}
                                {allAuthors.map((authorObj, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{authorObj.authorName}</th>
                                            <td>
                                                <Link to={`/author/edit/${authorObj._id}`} className="btn btn-sm btn-warning" >Edit</Link> &nbsp;
                                                <button onClick={() => deleteAuthor(authorObj._id)} className="btn btn-sm btn-danger" >Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

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

export default AllAuthors;