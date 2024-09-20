import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Grid, Container, Stack } from '@mui/material';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import causes from '../images/causes.png';
// import fertility from '../images/fertility.png';
import mental from '../images/mental.png';
import sexual from '../images/sexual.png';
import treatment from '../images/treatment.png';
import longterm from '../images/longterm.png';
// import periods from '../images/periods.png';
import symptoms from '../images/symptoms.png';

import './Guide.css'
const Guide = () => {
  return (
    <div className='guide'>
      <Navbar/>
      <div className='int'>
        <Container  maxWidth="xl" disableGutters>
      <Grid className='ttttt' container spacing={2} justifyContent="center">
        <Grid item xs={12} md={5}>
          <Stack className='css-136pb33' spacing={2}>
            <Typography className='css-1ekzvl9' variant="h3">
            <span className='css-1dnpnbi'> Pregnancy health</span> nourish, cherish, and thrive for two lives.{' '}
              
              
            </Typography>
              <span> <button><Link className='css-671h15' to='/consult'>Book Appointment</Link></button>
             <button><Link className='css-671h16' to='/dashboard'>Pregnancy Tracker</Link></button> </span>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <img
              className='imagess'
              alt=" We understand your hormonal health to get to the root of your Menstrual Health."
              src="https://proactiveforher.com/_next/image/?url=https%3A%2F%2Fpfh-testing-images.s3.ap-south-1.amazonaws.com%2Ftreatments%2F2d3882e1-577c-4181-b581-4c13c27c20cf&w=1920&q=75"
              style={{ width: '100%', height: 'auto' }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
    </div>
      <h1 className='section-heading'>GUIDE BOOK</h1>
      <section className='guide_list'>

        <div className='guide_container'>
        <div className='guide_card'>
          <div className='guide_title'>
            <h1>CAUSES</h1>
          </div>
          <div className='guide_image'>
            <img src={causes} alt='images'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/pregcauses">Know More</Link></button>
        </div>

        <div className='guide_card'>
          <div className='guide_title'>
            <h1>SYMPTOMS</h1>
          </div>
          <div className='guide_image'>
            <img src={symptoms} alt='img'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/symptomspreg">Know More</Link></button>
        </div>


        <div className='guide_card'>
          <div className='guide_title'>
            <h1>TREATMENT</h1>
          </div>
          <div className='guide_image'>
            <img src={treatment} alt='images'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/treatment">Know More</Link></button>
        </div>
        </div>
        
        <div className='guide_container'>
        {/* <div className='guide_card'>
          <div className='guide_title'>
            <h1>PERIODS</h1>
          </div>
          <div className='guide_image'>
            <img src={periods} alt='images'></img>
          </div>
          <div className='guide_text'>
           
          </div>
          <button className='css-671h09'><Link to="/periods">Know More</Link></button>
        </div> */}

        {/* <div className='guide_card'>
          <div className='guide_title'>
            <h1>FERTILITY</h1>
          </div>
          <div className='guide_image'>
            <img src={fertility} alt='images'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/fertility">Know More</Link></button>
        </div> */}
        <div className='guide_card'>
          <div className='guide_title'>
            <h1>CONSULT DOCTOR</h1>
          </div>
          <div className='guide_image'>
            <img src={mental} alt='images'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/consult">Click Here</Link></button>
        </div>
        <div className='guide_card'>
          <div className='guide_title'>
            <h1>PREGNANCY TRACKER</h1>
          </div>
          <div className='guide_image'>
            <img src={sexual} alt='images'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/pregnancyform" target='_blank'>Check Now</Link></button>
        </div>
        <div className='guide_card'>
          <div className='guide_title'>
            <h1>COMMUNITY SUPPORT</h1>
          </div>
          <div className='guide_image'>
            <img src={longterm} alt='images'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="#">Know More</Link></button>
        </div>
        </div>

        <div className='guide_container'>
        

        {/* <div className='guide_card'>
          <div className='guide_title'>
            <h1>LONG TERM EFFECTS</h1>
          </div>
          <div className='guide_image'>
            <img src={longterm} alt='images'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/longterm">Know More</Link></button>
        </div> */}

        
        </div>
        <section className="s s1">
      <div className='hhhhhh'><h1 className="s-heading">Why Pregnancy Healthcare at Feminergy is Different.</h1></div>
      <div className="box-container">
        <div className="box">
          <h2 className="box-heading">Compassionate Care</h2>
          <p className="box-paragraph">We prioritise providing compassionate care to our patients by understanding the emotional and physical challenges of pregnancy.</p>
        </div>
        <div className="box">
          <h2 className="box-heading">Nurturing Environment</h2>
          <p className="box-paragraph">We foster a sense of safety and comfort, allowing you to relax and focus on your pregnancy journey with peace of mind.</p>
        </div>
      </div>
      <div className="box-container">
        <div className="box">
          <h2 className="box-heading">Personalised</h2>
          <p className="box-paragraph">Each pregnancy journey is different, so we focus on providing care that is built around you.</p>
        </div>
        <div className="box">
          <h2 className="box-heading">Advanced Science</h2>
          <p className="box-paragraph">Our care is rigorously founded on the latest advancements, leaving no room for anything less. No gimmicks or false information, just evidence-based advanced care.</p>
        </div>
      </div>
    </section>
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
  )
}

export default Guide