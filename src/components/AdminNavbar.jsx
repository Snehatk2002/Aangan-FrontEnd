import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const LogOut = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">AanganCare</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Children</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pregnant Women</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Teenagers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="viewbook">Vaccination Slot Booking</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="adminfeedback">Feedback</a>
            </li>
          </ul>
          {/* Logout Button */}
          <button className="btn btn-danger" onClick={LogOut}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
