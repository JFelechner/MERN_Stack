
import React, { useState } from "react";

const HookForm = (props) => {
    const [fname, firstName] = useState("");
    const [lname, lastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, confirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname, lname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };

    return (
        <div>

            {/* container */}
            <div class="container px-4 mt-5">
                <div class="row gx-5">

                    {/* left column */}
                    <div class="col">
                        <div class="p-3 border bg-light">

                            {/* left header */}
                            <h1>Hook Form with Validations:</h1>

                            {/* form */}
                            <form onSubmit={createUser}>
                                <div class="mb-3">
                                    <label class="form-label">First Name: </label>
                                    <input type="text" class="form-control" onChange={(e) => firstName(e.target.value)} />

                                    {
                                        fname.length > 2 || fname.length == 0 ?
                                            "" :
                                            <p className="text-danger">First Name must be at least 2 characters</p>
                                    }

                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Last Name: </label>
                                    <input type="text" class="form-control" onChange={(e) => lastName(e.target.value)} />

                                    {
                                        lname.length > 2 || lname == 0 ?
                                            "" :
                                            <p className="text-danger">Last Name must be at least 2 characters</p>
                                    }
                                </div>

                                <div class="mb-3">
                                    <label>Email Address: </label>
                                    <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} />

                                    {
                                        email.length > 5 || email == 0 ?
                                            "" :
                                            <p className="text-danger">Email must be at least 5 characters</p>
                                    }
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Password: </label>
                                    <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} />
                                    {
                                        password.length > 8 || password.length == 0 ?
                                            "":
                                            <p className="text-danger">Password must be at least 8 characters</p> 
                                    }
                                </div>


                                <div class="mb-3">
                                    <label class="form-label">Confirm Password: </label>
                                    <input type="password" class="form-control" onChange={(e) => confirmPassword(e.target.value)} />

                                    {
                                        confirmpassword !== password ?
                                            <p className="text-danger">Password does not match. Try again</p> :
                                            ""
                                    }

                                </div>

                                <input type="submit" value="Create User" class="btn btn-primary" />
                            </form>

                        </div>
                    </div>

                    {/* right column */}
                    <div class="col">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default HookForm;