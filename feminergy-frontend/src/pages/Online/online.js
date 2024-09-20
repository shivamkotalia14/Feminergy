import React, { useState, useEffect } from 'react';
import './Appointment.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
// import { Link } from "react-router-dom";

const Consult = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  // const [lifestyle, setLifestyle] = useState([]);
  const [need, setNeed] = useState('');

  const handleFormSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
  };
  
    return (
      
      <div className='consult'>
        <Navbar/>
        
        <div className="Shivam">
            <h2 className='hgn'>Generate Diet Plan</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="Shivam-group">
                    <label className="Shivam-label">Age:</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
                </div>
                <div className="Shivam-group">
                    <label className="Shivam-label">Gender:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="Shivam-group">
                    <label className="Shivam-label">Weight (kg):</label>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                </div>
                <div className="Shivam-group">
                    <label className="Shivam-label">Height (cm):</label>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
                </div>
                {/*  */}
                <div className="Shivam-group">
                    <label className="Shivam-label">Need:</label>
                    <select value={need} onChange={(e) => setNeed(e.target.value)} required>
                        <option value="">Select Need</option>
                        <option value="lose">Lose Weight</option>
                        <option value="gain">Gain Weight</option>
                        <option value="maintain">Maintain Weight</option>
                    </select>
                </div>
                <button className='uru' type="submit">Calculate</button>
            </form>
        </div>
        <div className="newsletter-container">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h1 className="newsletter-heading">Subscribe to my Newsletter</h1>
          <p className="newsletter-description">Monthly inbox delivery: get the latest launches, reads, interviews, and exclusive content.</p>
        </div>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email address" className="newsletter-input" />
          <button type="submit" className="newsletter-button">Submit</button>
        </form>
      </div>
    </div>

        <Footer/>
      </div>
    );
  }
  
  export default Consult