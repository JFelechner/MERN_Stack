import React, {Component} from "react"; // importing React and Component so that we can create React Component

const PersonCard = props => {
    return(
        <div>
                <h1>{props.lname}, {props.fname}</h1>
                <p>Age: {props.age}</p>
                <p>Hair Color: {props.hairColor}</p>
        </div>
        
    );
}
    
export default PersonCard; //export the class so that it is importable from other files