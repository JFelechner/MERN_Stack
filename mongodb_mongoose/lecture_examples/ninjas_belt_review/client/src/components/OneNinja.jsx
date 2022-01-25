import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const OneNinja = () => {
    const { id } = useParams();

    const [ninjaDetails, setNinjaDetails] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
        .then(res=>{
            console.log("response when making request for one ninja", res)
            //save res.data.results into state
            setNinjaDetails(res.data.results)
        })
        .catch(err=> console.log(err))
    }, [])
    

    return (
        <div>
            <h4>Details about {ninjaDetails.firstName} {ninjaDetails.lastName}</h4>
            <p>Number of belts: {ninjaDetails.numBelts}</p>
            <p>ID: {id}</p>
            <p>Veteran status: {ninjaDetails.isVeteran? "Is a Veteran": "Not a Veteran"}</p>
        </div>
    );
};


export default OneNinja;