import React, { useState, useEffect } from 'react';
import './Consult.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import { Link } from "react-router-dom";

const Consult = () => {
    const [doctors, setDoctors] = useState([]);
  
    useEffect(() => {
      // Fetch doctors from MongoDB
      const fetchDoctors = async () => {
        const response = await fetch('http://localhost:5005/doctor/');
        const doctors = await response.json();
        setDoctors(doctors);
      };
  
      fetchDoctors();
    }, []);
  
    return (
      <div className='consult'>
        <Navbar/>
        <div className='consult_list'>
          <h1 className='section-heading'>CONSULT OUR DOCTORS</h1>
  
          {doctors.map((doctor) => (
            <div className='consult_container' key={doctor.id}>
              <h1>{doctor.name}</h1>
              <span className='d44'>Speciality: &nbsp;{doctor.speciality}</span>
              <p className='d44'>Type: &nbsp;{doctor.Type}</p>
              <p className='d44'>Experience: &nbsp;{doctor.experience}</p>
              <p className='d44'>Gender: &nbsp;{doctor.gender}</p>
              <p className='d44'><strong> Book an Appointment</strong></p>
              <button className='consult_button'><Link to={`/appointment/${doctor.name}`}>Visit Doctor</Link></button>
              <button className='consult_buttons'><Link to={`http://localhost:3030/`} target='_blank'>Online </Link></button>
            </div>
          ))}
        </div>
        <section className="s">
      <div className='hhhhhh'><h1 className="s-heading">Why Doctor's at Feminergy is Different.</h1></div>
      <div className="box-container">
        <div className="box">
          <h2 className="box-heading">We Provide Allopathic Care</h2>
          <p className="box-paragraph">At our clinic, we offer comprehensive allopathic treatments provided by experienced and dedicated doctors.</p>
        </div>
        <div className="box">
          <h2 className="box-heading">We Provide Homeopathic Care</h2>
          <p className="box-paragraph">Experience holistic healing with our dedicated team of homeopathic practitioners.</p>
        </div>
      </div>
      <div className="box-container">
        <div className="box">
          <h2 className="box-heading">We Provide Ayurvedic Care</h2>
          <p className="box-paragraph">Embrace the ancient wisdom of Ayurveda with our team of experienced Ayurvedic practitioners.</p>
        </div>
        <div className="box">
          <h2 className="box-heading">We are non-judgemental</h2>
          <p className="box-paragraph">Whether it is your emotional or your physical well-being, we listen to all your concerns without any judgement at all.</p>
        </div>
      </div>
    </section>
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