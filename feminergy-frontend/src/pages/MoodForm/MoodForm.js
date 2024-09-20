import React, { useState } from 'react';
import './Appointment.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
// import { Link } from "react-router-dom";

const Consult = () => {
  const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [occupation, setOccupation] = useState('');
    // const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bleedingType, setBleedingType] = useState('');
    const [need, setNeed] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
      // Handle form submission logic here
  };
  
    return (
      
      <div className='consult'>
        <Navbar/>
        
        <div className="Shivam">
            <h2 className='hgn'>Mood Tracker</h2>
            <form onSubmit={handleFormSubmit}>
    <div className="Shivam-group">
        <label className="Shivam-label">Name:</label>
        <input className='ghnnn' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
    </div>
    <div className="Shivam-group">
        <label className="Shivam-label">Age:</label>
        <input  type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
    </div>
    <div className="Shivam-group">
        <label className="Shivam-label">Occupation:</label>
        <input className='ghnnn' type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} required />
    </div>
    
    <div className="Shivam-group">
        <label className="Shivam-label">Weight (kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
    </div>
    <div className="Shivam-group">
        <label className="Shivam-label">Height (cm):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
    </div>
    {/* Bleeding Type Radio Buttons */}
    <div className="Shivam-group">
        <label className="Shivam-label">Mood on Day1: </label>
        <div>
            <input type="radio" id="noBleeding" name="bleedingType" value="noBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="noBleeding">Sad</label>
        </div>
        <div>
            <input type="radio" id="veryLessBleeding" name="bleedingType" value="veryLessBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="veryLessBleeding">Angry</label>
        </div>
        <div>
            <input type="radio" id="lessBleeding" name="bleedingType" value="lessBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="lessBleeding">Happy</label>
        </div>
        <div>
            <input type="radio" id="moreBleeding" name="bleedingType" value="moreBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="moreBleeding">Calm</label>
        </div>
        <div>
            <input type="radio" id="veryDarkBleeding" name="bleedingType" value="veryDarkBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="veryDarkBleeding">Excited</label>
        </div>
    </div>
    <div className="Shivam-group">
        <label className="Shivam-label">Mood on Day2: </label>
        <div>
            <input type="radio" id="noBleeding" name="bleedingType" value="noBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="noBleeding">Sad</label>
        </div>
        <div>
            <input type="radio" id="veryLessBleeding" name="bleedingType" value="veryLessBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="veryLessBleeding">Angry</label>
        </div>
        <div>
            <input type="radio" id="lessBleeding" name="bleedingType" value="lessBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="lessBleeding">Happy</label>
        </div>
        <div>
            <input type="radio" id="moreBleeding" name="bleedingType" value="moreBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="moreBleeding">Calm</label>
        </div>
        <div>
            <input type="radio" id="veryDarkBleeding" name="bleedingType" value="veryDarkBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="veryDarkBleeding">Excited</label>
        </div>
    </div>
    <div className="Shivam-group">
        <label className="Shivam-label">Mood on Day3: </label>
        <div>
            <input type="radio" id="noBleeding" name="bleedingType" value="noBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="noBleeding">Sad</label>
        </div>
        <div>
            <input type="radio" id="veryLessBleeding" name="bleedingType" value="veryLessBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="veryLessBleeding">Angry</label>
        </div>
        <div>
            <input type="radio" id="lessBleeding" name="bleedingType" value="lessBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="lessBleeding">Happy</label>
        </div>
        <div>
            <input type="radio" id="moreBleeding" name="bleedingType" value="moreBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="moreBleeding">Calm</label>
        </div>
        <div>
            <input type="radio" id="veryDarkBleeding" name="bleedingType" value="veryDarkBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="veryDarkBleeding">Excited</label>
        </div>
    </div>
    <div className="Shivam-group">
        <label className="Shivam-label">Mood on Day4: </label>
        <div>
            <input type="radio" id="noBleeding" name="bleedingType" value="noBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="noBleeding">Sad</label>
        </div>
        <div>
            <input type="radio" id="veryLessBleeding" name="bleedingType" value="veryLessBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="veryLessBleeding">Angry</label>
        </div>
        <div>
            <input type="radio" id="lessBleeding" name="bleedingType" value="lessBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="lessBleeding">Happy</label>
        </div>
        <div>
            <input type="radio" id="moreBleeding" name="bleedingType" value="moreBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="moreBleeding">Calm</label>
        </div>
        <div>
            <input type="radio" id="veryDarkBleeding" name="bleedingType" value="veryDarkBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="veryDarkBleeding">Excited</label>
        </div>
    </div>
    <div className="Shivam-group">
        <label className="Shivam-label">Mood on Day5: </label>
        <div>
            <input type="radio" id="noBleeding" name="bleedingType" value="noBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="noBleeding">Sad</label>
        </div>
        <div>
            <input type="radio" id="veryLessBleeding" name="bleedingType" value="veryLessBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="veryLessBleeding">Angry</label>
        </div>
        <div>
            <input type="radio" id="lessBleeding" name="bleedingType" value="lessBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="lessBleeding">Happy</label>
        </div>
        <div>
            <input type="radio" id="moreBleeding" name="bleedingType" value="moreBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="moreBleeding">Calm</label>
        </div>
        <div>
            <input type="radio" id="veryDarkBleeding" name="bleedingType" value="veryDarkBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="veryDarkBleeding">Excited</label>
        </div>
    </div>
    <div className="Shivam-group">
        <label className="Shivam-label">Mood on Day6: </label>
        <div>
            <input type="radio" id="noBleeding" name="bleedingType" value="noBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="noBleeding">Sad</label>
        </div>
        <div>
            <input type="radio" id="veryLessBleeding" name="bleedingType" value="veryLessBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="veryLessBleeding">Angry</label>
        </div>
        <div>
            <input type="radio" id="lessBleeding" name="bleedingType" value="lessBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="lessBleeding">Happy</label>
        </div>
        <div>
            <input type="radio" id="moreBleeding" name="bleedingType" value="moreBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="moreBleeding">Calm</label>
        </div>
        <div>
            <input type="radio" id="veryDarkBleeding" name="bleedingType" value="veryDarkBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="veryDarkBleeding">Excited</label>
        </div>
    </div>
    <div className="Shivam-group">
        <label className="Shivam-label">Mood on Day7: </label>
        <div>
            <input type="radio" id="noBleeding" name="bleedingType" value="noBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="noBleeding">Sad</label>
        </div>
        <div>
            <input type="radio" id="veryLessBleeding" name="bleedingType" value="veryLessBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="veryLessBleeding">Angry</label>
        </div>
        <div>
            <input type="radio" id="lessBleeding" name="bleedingType" value="lessBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="lessBleeding">Happy</label>
        </div>
        <div>
            <input type="radio" id="moreBleeding" name="bleedingType" value="moreBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="moreBleeding">Calm</label>
        </div>
        <div>
            <input type="radio" id="veryDarkBleeding" name="bleedingType" value="veryDarkBleeding" onChange={(e) => setBleedingType(e.target.value)} />
            <label htmlFor="veryDarkBleeding">Excited</label>
        </div>
    </div>
    {/* Need Selector */}
    
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