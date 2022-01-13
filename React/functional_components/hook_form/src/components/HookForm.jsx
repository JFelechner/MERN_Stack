
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
                            <h1>Hook Form:</h1>

                            {/* form */}
                            <form onSubmit={createUser}>
                                <div class="mb-3">
                                    <label class="form-label">First Name: </label>
                                    <input type="text" class="form-control" onChange={(e) => firstName(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Last Name: </label>
                                    <input type="text" class="form-control" onChange={(e) => lastName(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label>Email Address: </label>
                                    <input type="text" class="form-control" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Password: </label>
                                    <input type="text" class="form-control" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Confirm Password: </label>
                                    <input type="text" class="form-control" onChange={(e) => confirmPassword(e.target.value)} />
                                </div>
                                <input type="submit" value="Create User" class="btn btn-primary" />
                            </form>

                        </div>
                    </div>

                    {/* right column */}
                    <div class="col">
                        <div class="p-3 border bg-light">

                            {/* right header */}
                        <h4>Your Form Data:</h4>
                            <p>First Name: {fname}</p>
                            <p>Last Name: {lname}</p>
                            <p>Email: {email}</p>
                            <p>Password: {password}</p>
                            <p>Confirm Password: {confirmpassword}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HookForm;