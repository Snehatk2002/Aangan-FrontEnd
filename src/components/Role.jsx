import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Role = () => {
    const navigate = useNavigate();

    const handleRoleSelection = (role) => {
        switch (role) {
            case "Teenager":
                navigate("/teenager");
                break;
            case "Child":
                navigate("/child");
                break;
            case "Pregnant_woman":
                navigate("/pregnant");
                break;
            
            default:
                break;
        }
    };

    return (
        <div className="role-container">
            <h2>Select Your Role</h2>
            <div className="role-options">
                <label>
                    <input type="radio" name="role" value="Teenager" onChange={() => handleRoleSelection("Teenager")} />
                    Teenager
                </label>

                <label>
                    <input type="radio" name="role" value="Child" onChange={() => handleRoleSelection("Child")} />
                    Child
                </label>

                <label>
                    <input type="radio" name="role" value="Pregnant_woman" onChange={() => handleRoleSelection("Pregnant_woman")} />
                    Pregnant Woman
                </label>

                
            </div>
        </div>
    );
};

export default Role;
