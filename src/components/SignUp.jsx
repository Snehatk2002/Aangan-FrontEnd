import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp= () => {
    const navigate = useNavigate();
    
    const [data, setData] = useState({
        name: "",
        email: "",
        address: "",
        phoneno: "",
        gender: "",
        dob: "",
        password: "",
        confirm: "",
        role: "",
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        if (data.password === data.confirm) {
            alert("Password and Confirm Password match");
            console.log(data);
            axios.post("http://localhost:8080/userSignUp", data)
                .then((response) => {
                    console.log(response.data);
                    if (response.data.status === "success") {
                        alert("Successfully Registered");
                        sessionStorage.setItem("token", response.data.token);
                        sessionStorage.setItem("userid", response.data.userid);
                        navigate("/");
                    } else {
                        alert("Registration Failed");
                    }
                })
                .catch((error) => {
                    console.error("Error during registration", error);
                });
        } else {
            alert("Password and Confirm Password do not match");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 className="text-center">Register</h2>
                    <div className="card p-4">
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} required />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={data.email} onChange={inputHandler} required />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">Phone Number</label>
                                <input type="text" className="form-control" name="phoneno" value={data.phoneno} onChange={inputHandler} required />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control" name="address" value={data.address} onChange={inputHandler} required />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">Gender</label>
                                <div>
                                    <input type="radio" name="gender" value="Male" onChange={inputHandler} /> Male &nbsp;
                                    <input type="radio" name="gender" value="Female" onChange={inputHandler} /> Female
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" name="dob" value={data.dob} onChange={inputHandler} required />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">Role</label>
                                <select className="form-control" name="role" value={data.role} onChange={inputHandler} required>
                                    <option value="">Select Role</option>
                                    <option value="Teenager">Teenager</option>
                                    <option value="child">Child</option>
                                    <option value="Pregnant_woman">Pregnant Woman</option>
                                </select>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" value={data.password} onChange={inputHandler} required />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" name="confirm" value={data.confirm} onChange={inputHandler} required />
                            </div>
                            <div className="col-12 text-center mt-3">
                                <button className="btn btn-dark" onClick={readValue}>Register</button>
                                <p className="mt-3">
                                    Already have an account? <Link to="/">Login</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
