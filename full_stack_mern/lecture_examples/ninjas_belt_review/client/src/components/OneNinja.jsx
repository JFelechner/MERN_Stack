
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";


const OneNinja = () => {
    const { id } = useParams();
    const history = useHistory();//to redirect after deleting a ninja
    const [ninjaDetails, setNinjaDetails] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
            .then(res => {
                console.log("response when making request for one ninja", res)
                //save res.data.results into state
                setNinjaDetails(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteNinja = () => {
        console.log("deleting ninja")
        axios.delete(`http://localhost:8000/api/ninjas/${id}`)
            .then(res => {
                console.log("response when deleting", res)
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h4>Details about {ninjaDetails.firstName} {ninjaDetails.lastName}</h4>
            <p>Number of belts: {ninjaDetails.numBelts}</p>
            <p>ID: {id}</p>
            <p>Veteran status: {ninjaDetails.isVeteran ? "Is a Veteran" : "Not a Veteran"}</p>
            <button onClick={deleteNinja} className="btn btn-danger">Delete Ninja</button>
        </div>
    );
};


export default OneNinja;