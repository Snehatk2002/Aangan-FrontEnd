import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(data);

        axios.post("http://localhost:8080/AdminLogin", data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    alert("Successfully logged in as admin");
                    window.location.href = "/adminhome";
                } else {
                    alert("Can't login. Please check your email or password.");
                }
            })
            .catch((error) => {
                console.error(error); // Handle errors
                alert("An error occurred during login.");
            });
    };

    return (
        <div className="admin-login-page" style={styles.page}>
            {/* Banner Section */}
            <div style={styles.banner}>
                <h1 style={styles.bannerText}>AANGANCARE</h1>
            </div>
            {/* Card Section */}
            <div style={styles.card}>
                <h2 className="text-center mb-4" style={styles.heading}>Admin Login</h2>
                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label" style={styles.label}>Email Id</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        value={data.email} 
                        onChange={inputHandler} 
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password" className="form-label" style={styles.label}>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="password" 
                        value={data.password} 
                        onChange={inputHandler} 
                        placeholder="Enter your password"
                    />
                </div>
                <div className="text-center">
                    <button className="btn btn-warning btn-block" onClick={readValue}>LOGIN</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    page: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'url("https://www.kerala9.com/wp-content/uploads/2021/12/Anganwadi-kerala.jpg")', // Background Image
        backgroundSize: 'cover', // Cover entire screen
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent repeating
        backdropFilter: 'blur(3px)', // Slight blur effect for better readability
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background for contrast
        border: '2px solid #FFCC00', // Golden yellow border
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        marginTop: '30px',
        width: '300px',
    },
    banner: {
        backgroundColor: 'rgba(255, 204, 0, 0.9)', // Semi-transparent golden yellow
        padding: '15px 0',
        textAlign: 'center',
        borderRadius: '10px',
        width: '100%',
    },
    bannerText: {
        color: 'black',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '0',
    },
    heading: {
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: '#4CAF50', // Leaf green for health
        padding: '10px',
        borderRadius: '6px',
    },
    label: {
        fontWeight: 'bold',
        color: '#444444', // Dark grey for readability
    },
    buttonPrimary: {
        backgroundColor: '#1976D2', // Deep blue for trust
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
    },
};




export default AdminLogin;
