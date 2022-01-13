import React, { Component } from "react"; // importing React and Component so that we can create React Component

class PersonCard extends Component { //Component is inheriting features from React component

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render() {
        
        let bdayCounter = ()=> {
            this.setState({age: this.state.age+ 1})
        }
        
        let { fname, lname, hairColor } = this.props
        return <div>
            <h1>{lname}, {fname}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>

            <button onClick={bdayCounter}>

                Birthday Button for {fname} {lname}
            </button>
        </div>;
    }
}

export default PersonCard; //export the class so that it is importable from other files