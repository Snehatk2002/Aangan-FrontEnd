import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    const Adminlogin = () => {
        sessionStorage.clear();
        navigate("/Adminlogin");
    };

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(data);
        axios.post("http://localhost:8080/usersignin", data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    alert("Successfully logged in");
                    navigate("/role"); // Redirect to a common page
                } else {
                    alert("Error logging in");
                }
            })
            .catch((error) => {
                console.error("There was an error logging in!", error);
            });
    };

    return (
        <div className="container">
            <div className="row g-3">
            <h2 className="text-center">Login</h2>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12">
                            <label htmlFor="" className="form-label">Email id</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12">
                            <button className="btn btn-success" onClick={readValue}>Login</button>
                            <Link className="nav-link" to="/signup">New account</Link>
                        </div>
                        <div className="col col-12">
                            <button className="btn btn-secondary" onClick={Adminlogin}>ADMIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
