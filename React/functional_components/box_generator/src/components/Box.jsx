import React, { useState } from 'react';

const Box = props => {
    let [boxColor, setBoxColor] = useState("")

    let [listOfBoxes, setListOfBoxes] = useState([]);

    const createBox = (e) => {
        e.preventDefault();
        let boxObj = { boxColor }
        setListOfBoxes([...listOfBoxes, boxObj])
        document.getElementById('colorInput').value = ""
    }

    return (
        <>

            <div class="container px-4 mt-4">
                <div class="row gx-5">

                    <div class="col">
                        <div class="p-3 border bg-light">
                            <form onSubmit={createBox}>
                                <div class="mb-3" >
                                    <label for="" class="form-label me-3">Color</label>
                                    <input id="colorInput" type="text" class="me-3" onChange={(e) => setBoxColor(e.target.value)} />
                                    <button type="submit" class="btn btn-primary">Add</button>
                                </div>
                            </form>
                        </div>

                        {
                            listOfBoxes.map((box) => {
                                return (
                                    // <div style = {{width: "100px", height: "100px" , backgroundColor: box.boxColor , display: "inline-block"}}>

                                    <div style = {{backgroundColor: box.boxColor}} class = "mt-3 ms-3 w-25 h-50 d-inline-block">

                                    </div>
                                    // </div>
                                )
                            })
                        }

                    </div>

                    <div class="col">
                        <div class=""></div>
                    </div>

                </div>
            </div>

        </>
    );

}

export default Box;