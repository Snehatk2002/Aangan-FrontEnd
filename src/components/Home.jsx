import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="container text-center mt-5">
        <Navbar/>
      <h1>AnganCare</h1>
      <p>
        AnganCare is a comprehensive platform designed to monitor and enhance the well-being of children, 
        pregnant women, teenagers, and elderly family members. It ensures proper health tracking, nutrition 
        management, and timely support for holistic community development.
      </p>
    </div>
  );
};

export default Home;
