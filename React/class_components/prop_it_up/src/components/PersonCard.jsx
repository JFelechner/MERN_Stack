import React, {Component} from "react"; // importing React and Component so that we can create React Component

class PersonCard extends Component { //Component is inheriting features from React component
    render() {
        let {fname, lname, age, hairColor} = this.props
        return <div>
            <h1>{lname}, {fname}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>;
    }
}
    
export default PersonCard; //export the class so that it is importable from other files