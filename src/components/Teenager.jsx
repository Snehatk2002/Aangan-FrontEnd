import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const Teenager = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        schoolName: "",
        class: "",
        height: "",
        weight: "",
        healthStatus: "",
        nutritionStatus: "",
        vaccinationStatus: "",
        counselingNeeds: "",
        financialAid: false,
        emotionalSupport: false
    });

    const navigate = useNavigate(); // Initialize navigate

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const readValue = () => {
        console.log("Submitting Data:", formData);

        axios.post("http://localhost:8080/Teenager", formData)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    alert("SUCCESSFULLY ADDED");
                    navigate("/home"); // Redirect to Home Page
                } else {
                    alert("ERROR");
                }
            })
            .catch((error) => {
                console.error("Submission Error:", error);
                alert("An error occurred.");
            });
    };

    return (
        <div>
            <h2>Teenager Details (13-19 years)</h2>
            <form>
                <h3>Personal Information</h3>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />

                <h3>School Details</h3>
                <input type="text" name="schoolName" placeholder="School Name" value={formData.schoolName} onChange={handleChange} />
                <input type="text" name="class" placeholder="Class" value={formData.class} onChange={handleChange} />


                <h3>Health Checkups</h3>
                <input type="text" name="height" placeholder="Height" value={formData.height} onChange={handleChange} />
                <input type="text" name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} />
                <input type="text" name="healthStatus" placeholder="Health Status" value={formData.healthStatus} onChange={handleChange} />
                <input type="text" name="nutritionStatus" placeholder="Nutrition Status" value={formData.nutritionStatus} onChange={handleChange} />
                <input type="text" name="vaccinationStatus" placeholder="Vaccination Status" value={formData.vaccinationStatus} onChange={handleChange} />

                <h3>Mental Health Support</h3>
                <input type="text" name="counselingNeeds" placeholder="Counseling Needs" value={formData.counselingNeeds} onChange={handleChange} />



                <h3>Family Support Needed</h3>
                <label>
                    <input type="checkbox" name="financialAid" checked={formData.financialAid} onChange={handleChange} /> Financial Aid
                </label>
                <label>
                    <input type="checkbox" name="emotionalSupport" checked={formData.emotionalSupport} onChange={handleChange} /> Emotional Well-being
                </label>

                <div className="col-12 mt-4" style={{ textAlign: "center" }}>
                    <button className="btn btn-primary" type="button" onClick={readValue}>ADD</button>
                </div>
            </form>
        </div>
    );
};

export default Teenager;