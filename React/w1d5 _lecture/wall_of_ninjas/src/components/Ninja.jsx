import React, {useState} from 'react';
import styles from './Ninja.module.css';

const Ninja = props => {
    // creating atteributes to keep track of information collected on the form
    let [ninjaName, setNinjaName] = useState("")
    let [imageUrl, setImageUrl] = useState("")
    let [favColor, setFaveColor] = useState("")

    //this state variable is to toggle their graduation status
    let [graduated, setGraduated] = useState(false)

    // create a state variable to store every ninja that was stored to the form
    let [listOfNinjas, setListOfNinjas] = useState([]);

    //this function runs when submitted
    const createNinja = (e) =>{
        e.preventDefault(); // the default behavior of a form when submitting is to reload the page and we are preventign that from happening
        console.log("submitted form")

        let ninjaObj = {ninjaName, imageUrl, favColor} // ninja Object

        setListOfNinjas([...listOfNinjas, ninjaObj])
    }

    // toggle graduation for student function that gets called when the checkbox is clicked
    const toggleGraduation = (idx) =>{

        // create a copy of list of ninjas and update the copy list of ninjas array at specific index of student we want to graduate to have their graduation property === true
        let [...copyOfListOfNinjas] = listOfNinjas;

        // update the graduation status of the student to be yhe opposite of whatever it currently is (true-> false or false->true)
        copyOfListOfNinjas[idx].graduated =! copyOfListOfNinjas[idx].graduated

        // update the state with this newly updated information
        setListOfNinjas(copyOfListOfNinjas);
    }

    return (
        <>
            <h1>The Wall of Ninjas</h1>
            <form onSubmit = {createNinja}>
                <div class="mb-3">
                    <label htmlfor="" class="form-label">Ninja name:</label>
                    <input type="text" class="form-control" onChange = {(e) => setNinjaName(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label htmlfor="" class="form-label">Image Url:</label>
                    <input type="text" class="form-control" onChange = {(e) => setImageUrl(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label htmlfor="" class="form-label">Favorite Color:</label>
                    <input type="text" class="form-control" onChange = {(e) => setFaveColor(e.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary">Create Ninja</button>
            </form>

            <hr />
            <h3>Here are our list of Ninjas</h3>
            {
                listOfNinjas.map((ninja, i)=>{
                    return (
                        <div className = {styles.ninja} key = {i} style = {{ backgroundColor: ninja.favColor, textDecoration: ninja.graduated? "line-through": "none"}}>
                            <h1>{ninja.ninjaName} - Idx #{i}</h1>
                            <p><img src={ninja.imageUrl} alt="" width="100px"/></p>
                            <p>Favorite color: {ninja.favColor}</p>
                            <p><input type="checkbox" className="ty" onClick = {()=>toggleGraduation(i)} />Graduate</p>
                        </div>
                    )
                })
            }

        </>
    );
}
export default Ninja;