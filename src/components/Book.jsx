import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    age: "",
    date: "",
    time: "",
    location: "",
    vaccineType: "",
  });

  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    // Validate required fields
    for (let key in formData) {
      if (!formData[key]) {
        setMessage("Please fill in all fields.");
        return;
      }
    }

    try {
      const response = await axios.post("http://localhost:8080/book", formData);
      
      if (response.data.status === "success") {
        alert("Slot successfully booked!");
      } else if (response.data.status === "error" && response.data.message === "Slot already booked for this time") {
        alert("Slot is not available for this time. Please choose another time.");
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      alert("Slot is not available for this time. Please choose another time.");
      console.error(error);
    }
  };

  const deleteSchedule = () => {
    sessionStorage.clear();
    navigate("/cancel");
  };

  return (
    <div className="container mt-5">
      <Navbar />
      <h2 className="text-center">Vaccine Slot Booking</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          {Object.keys(formData).map((key) => (
            <div className="col-md-6" key={key}>
              <label className="form-label">{key.toUpperCase()}</label>
              <input
                type={key === "date" ? "date" : key === "time" ? "time" : "text"}
                className="form-control"
                name={key}
                value={formData[key]}
                onChange={handleChange}
              />
            </div>
          ))}
          <center>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">BOOK SLOT</button>
              <button type="button" className="btn btn-danger ms-3" onClick={deleteSchedule}>CANCEL</button>
            </div>
          </center>
        </div>
      </form>
    </div>
  );
};

export default Book;
