import React, { useState } from 'react';
import './Appointment.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
// import { Link } from "react-router-dom";

const Consult = () => {
  const [motherName, setMotherName] = useState('');
  const [motherAge, setMotherAge] = useState('');
  const [visitingDate, setVisitingDate] = useState('');
  const [motherWeight, setMotherWeight] = useState('');
  const [motherHeight, setMotherHeight] = useState('');
  const [pregnancyStatus, setPregnancyStatus] = useState('');

  const handleFormSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
  };
  
    return (
      
      <div className='consult'>
        <Navbar/>
        
        <div className="Shivam">
            <h2 className='hgn'>Pregnancy Tracker</h2>
            <form onSubmit={handleFormSubmit}>
            <div className="Shivam-group">
                <label className="Shivam-label">Mother's Name:</label>
                <input type="text" className='ghnnn' value={motherName} onChange={(e) => setMotherName(e.target.value)} required />
            </div>
            <div className="Shivam-group">
                <label className="Shivam-label">Mother's Age:</label>
                <input type="number" value={motherAge} onChange={(e) => setMotherAge(e.target.value)} required />
            </div>
            <div className="Shivam-group">
                <label className="Shivam-label">Visiting Date:</label>
                <input type="date" value={visitingDate} onChange={(e) => setVisitingDate(e.target.value)} required />
            </div>
            <div className="Shivam-group">
                <label className="Shivam-label">Mother's Weight (kg):</label>
                <input type="number" value={motherWeight} onChange={(e) => setMotherWeight(e.target.value)} required />
            </div>
            <div className="Shivam-group">
                <label className="Shivam-label">Mother's Height (cm):</label>
                <input type="number" value={motherHeight} onChange={(e) => setMotherHeight(e.target.value)} required />
            </div>
            <div className="Shivam-group">
                <label className="Shivam-label">Pregnancy Status:</label>
                <div>
                    <input type="radio" id="good" name="pregnancyStatus" value="good" onChange={(e) => setPregnancyStatus(e.target.value)} />
                    <label htmlFor="good">Good</label>
                </div>
                <div>
                    <input type="radio" id="bad" name="pregnancyStatus" value="bad" onChange={(e) => setPregnancyStatus(e.target.value)} />
                    <label htmlFor="bad">Bad</label>
                </div>
                <div>
                    <input type="radio" id="normal" name="pregnancyStatus" value="normal" onChange={(e) => setPregnancyStatus(e.target.value)} />
                    <label htmlFor="normal">Normal</label>
                </div>
            </div>
            <button className='uru' type="submit">Submit</button>
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