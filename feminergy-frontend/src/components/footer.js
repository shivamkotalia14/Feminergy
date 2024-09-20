import React from 'react'
import './Footer.css'
import logo from '../pages/images/trans-logo.png'

const Footer = () => (
    <footer className="footer">
    <div className="footer-container">
    <img className='foot-lo' src={logo} alt='img' style={{ width: '320px', height: '120px' }}/>
    <h1 className="footer-titles">Feminergy</h1>
      <div className="footer-content">
        <div className="footer-section">
        <h3 className="footer-title">What we Treat: </h3>
          <p className="footer-description">
            Sexual Health <br />
            Menstrual Health <br />
            PCOS <br />
            Period Tracker <br />
            Mood Tracker <br />
            Preganacy Tracker <br />
            PCOD <br />
            Consultations <br />
            Community Support <br />
            Diet Plan <br />
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Our Services</h3>
          <p className="footer-description">
            Book Appointment <br />
            Period Awarness <br />
            Lab Tests <br />
            PCOD + PCOS test <br/>

          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Our Experts</h3>
          <p className="footer-description">
          Gynaecologist <br />
          Fertility Specialist <br />
          PCOD Specialist <br />
          PCOS Specialist <br />
          Nutritionist<br />
          Dermatologist
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">News & Resources</h3>
          <p className="footer-description">
            Blogs <br />
            Testimonials
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Legal</h3>
          <p className="footer-description">
            Privacy Policy <br />
            Terms of Use <br />
            Cancellation <br />
            Career<br/>
            Internship For Students<br/>
          </p>
        </div>

        
      </div>
      <div className="horizontal-line"></div>
      <div>
        <p className='jjjj'>|&nbsp;&nbsp;&nbsp;&nbsp;+91-9876567893  &nbsp;&nbsp;&nbsp;&nbsp;    |   &nbsp;&nbsp;&nbsp;&nbsp;    Feminergy@info.com  &nbsp;&nbsp;&nbsp;&nbsp;    |   &nbsp;&nbsp;&nbsp;&nbsp;     H-54, Shivaji Marg, New Delhi-110016 &nbsp;&nbsp;&nbsp;&nbsp;    |         </p>   
      </div>
      
      </div>
      <div className='copy'>Feminergy© 2024. All rights reserved.</div>
      </footer>
  )

export default Footer