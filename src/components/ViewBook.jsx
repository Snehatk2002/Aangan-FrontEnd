import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';

const ViewBook = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = () => {
        axios.post("http://localhost:8080/Viewbook", {})
            .then(response => {
                setData(response.data);
                setFilteredData(response.data);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const filtered = data.filter(item =>
            (item.date?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
            (item.location?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
            (item.time?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
            (item.vaccineType?.toLowerCase() || '').includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchQuery, data]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <AdminNavbar />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <h1 className="mb-4">BOOKED SLOT DETAILS</h1>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by date, location, time, or vaccine type"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button className="btn btn-primary" type="button">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-8 col-xl-8">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover table-bordered text-center">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">NAME</th>
                                        <th scope="col">EMAIL</th>
                                        <th scope="col">CONTACT</th>
                                        <th scope="col">AGE</th>
                                        <th scope="col">DATE</th>
                                        <th scope="col">TIME</th>
                                        <th scope="col">LOCATION</th>
                                        <th scope="col">VACCINE TYPE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.length === 0 ? (
                                        <tr>
                                            <td colSpan="8" className="text-center">No records found.</td>
                                        </tr>
                                    ) : (
                                        filteredData.map((value, index) => (
                                            <tr key={index}>
                                                <td>{value.name}</td>
                                                <td>{value.email}</td>
                                                <td>{value.contact}</td>
                                                <td>{value.age}</td>
                                                <td>{value.date}</td>
                                                <td>{value.time}</td>
                                                <td>{value.location}</td>
                                                <td>{value.vaccineType}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewBook;
