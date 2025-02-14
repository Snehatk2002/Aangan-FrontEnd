import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Child = () => {
    const [formData, setFormData] = useState({
        name: "",
        parentName: "",
        age: "",
        gender: "",
        healthStatus: "",
        vaccinationStatus: "",
        nutritionStatus: "",
        guardianContact: "",
        address: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const readValue = () => {
        console.log("Submitting Data:", formData);

        axios.post("http://localhost:8080/child", formData)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    alert("SUCCESSFULLY ADDED");
                    navigate("/home"); // Redirect to Home Page
                } else {
                    alert("ERROR: Could not register");
                }
            })
            .catch((error) => {
                console.error("Submission Error:", error);
                alert("An error occurred while submitting the form.");
            });
    };

    return (
        <div className="container">
            <h2>Anganwadi Child Registration</h2>
            <form>
                <input type="text" name="name" placeholder="Child's Name" value={formData.name} onChange={handleChange} required />
                <input type="text" name="parentName" placeholder="Parent/Guardian Name" value={formData.parentName} onChange={handleChange} required />
                <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
                
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <input type="text" name="healthStatus" placeholder="Health Status" value={formData.healthStatus} onChange={handleChange} required />
                <input type="text" name="vaccinationStatus" placeholder="Vaccination Status" value={formData.vaccinationStatus} onChange={handleChange} required />
                <input type="text" name="nutritionStatus" placeholder="Nutrition Status" value={formData.nutritionStatus} onChange={handleChange} required />
                <input type="text" name="guardianContact" placeholder="Guardian Contact Number" value={formData.guardianContact} onChange={handleChange} required />
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />

                <div className="col-12 mt-4" style={{ textAlign: "center" }}>
                    <button className="btn btn-primary" type="button" onClick={readValue}>ADD</button>
                </div>
            </form>
        </div>
    );
};

export default Child;
