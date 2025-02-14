import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Pregnant = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dueDate: "",
        trimester: "",
        doctorName: "",
        hospitalName: "",
        pregnancies: "",
        children: "",
        miscarriages: "",
        lastCheckup: "",
        healthStatus: "",
        vaccinationDetails: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/pregnant", formData);
            if (response.data.status === "success") {
                alert("Details successfully added!");
                navigate("/home"); // Redirect to home page
            } else {
                alert("Error in adding details.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while submitting the form.");
        }
    };

    return (
        <div>
            <h2>Pregnant Women Details</h2>
            <form onSubmit={handleSubmit}>
                <h3>Personal Details</h3>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />

                <h3>Pregnancy Details</h3>
                <input type="date" name="dueDate" placeholder="Due Date" onChange={handleChange} required />
                <input type="text" name="trimester" placeholder="Trimester (1st, 2nd, 3rd)" onChange={handleChange} required />
                <input type="text" name="doctorName" placeholder="Doctor's Name" onChange={handleChange} />
                <input type="text" name="hospitalName" placeholder="Hospital Name" onChange={handleChange} />

                <h3>Medical History</h3>
                <input type="number" name="pregnancies" placeholder="Number of Pregnancies" onChange={handleChange} />
                <input type="number" name="children" placeholder="Number of Children" onChange={handleChange} />
                <input type="number" name="miscarriages" placeholder="Number of Miscarriages" onChange={handleChange} />
                <input type="date" name="lastCheckup" placeholder="Last Checkup Date" onChange={handleChange} />
                <input type="text" name="healthStatus" placeholder="Health Status" onChange={handleChange} />
                <input type="text" name="vaccinationDetails" placeholder="Vaccination Details" onChange={handleChange} />

                <div className="col-12 mt-4" style={{ textAlign: "center" }}>
                    <button className="btn btn-primary" type="submit">ADD</button>
                </div>
            </form>
        </div>
    );
};

export default Pregnant;
