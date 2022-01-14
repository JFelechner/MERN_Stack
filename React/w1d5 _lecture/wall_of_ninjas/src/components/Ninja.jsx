import React, {useState} from 'react';

const Ninja = props => {
    // creating atteributes to keep track of information collected on the form
    let [ninjaName, setNinjaName] = useState("")
    let [imageUrl, setImageUrl] = useState("")
    let [favColor, setFaveColor] = useState("")

    // create a state variable to store every ninja that was stored to the form
    let [listOfNinjas, setListOfNinjas] = useState([]);

    const createNinja = (e) =>{
        e.preventDefault(); // the default behavior of a form when submitting is to reload rhw page and we are preventign that from happening
        console.log("submitted form")

        let ninjaObj = {ninjaName, imageUrl, favColor} // ninja Object

        setListOfNinjas([...listOfNinjas, ninjaObj])

    }

    return (
        <>

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
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <hr />
            <h3>Here are our list of Ninjas</h3>


            {
                listOfNinjas.map((ninja)=>{
                    return (
                        <div style = {{border: "1px solid black", backgroundColor: ninja.favColor, display: "inline-block"}}>
                            <h1>{ninja.ninjaName}</h1>
                            <p><img src={ninja.imageUrl} alt="" width="100px"/></p>
                            <p>Favorite color: {ninja.favColor}</p>
                        </div>
                    )
                })
            }


        </>
    );
}
export default Ninja;