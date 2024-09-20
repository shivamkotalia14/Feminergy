import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Grid, Container, Stack } from '@mui/material';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import causes from '../images/causes.png';
// import fertility from '../images/fertility.png';
import mental from '../images/mental.png';
// import sexual from '../images/sexual.png';
import treatment from '../images/treatment.png';
import longterm from '../images/longterm.png';
import periods from '../images/periods.png';
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
            <span className='css-1dnpnbi'> Menstrual health</span> is not just about bleeding; it's about thriving.{' '}
              
              
            </Typography>
              <span> <button><Link className='css-671h10' to='/dashboard'>Mood Tracker</Link></button>
             <button><Link className='css-671h12' to='/dashboard'>Period Tracker</Link></button> </span>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <img
              className='imagess'
              alt=" We understand your hormonal health to get to the root of your Menstrual Health."
              src="https://proactiveforher.com/_next/image/?url=https%3A%2F%2Fpfh-testing-images.s3.ap-south-1.amazonaws.com%2Ftreatments%2F048b1ebd-e7fb-412a-a8c8-525dd6c1d642&w=1920&q=75"
              style={{ width: '100%', height: 'auto' }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
    </div>
      <h2 className="section-heading">Guide Book</h2>
      <section className='guide_list'>

        <div className='guide_container'>
        <div className='guide_card'>
          <div className='guide_title'>
            <h1>CAUSES</h1>
          </div>
          <div className='guide_image'>
            <img src={causes} alt='period-img'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link  to="/periodcause">Know More</Link></button>
        </div>

        <div className='guide_card'>
          <div className='guide_title'>
            <h1>SYMPTOMS</h1>
          </div>
          <div className='guide_image'>
            <img src={symptoms} alt='period-img'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/symptomsperiod">Know More</Link></button>
        </div>


        <div className='guide_card'>
          <div className='guide_title'>
            <h1>TREATMENT</h1>
          </div>
          <div className='guide_image'>
            <img src={treatment} alt='period-img'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/treatmentperiod">Know More</Link></button>
        </div>
        </div>
        
        <div className='guide_container'>
        

        <div className='guide_card'>
          <div className='guide_title'>
            <h1>PERIOD TRACKER</h1>
          </div>
          <div className='guide_image'>
            <img src={periods} alt='period-img'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/periodform" target='_blank'>Fill Now</Link></button>
        </div>
        <div className='guide_card'>
          <div className='guide_title'>
            <h1>Mood Tracker</h1>
          </div>
          <div className='guide_image'>
            <img src={mental} alt='period-img'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/moodform" target='_blank'>Fill Now</Link></button>
        </div>
        <div className='guide_card'>
          <div className='guide_title'>
            <h1>COMMUNITY SUPPORT</h1>
          </div>
          <div className='guide_image'>
            <img src={longterm} alt='period-img'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="http://localhost:5000" target='_blank'>Know More</Link></button>
        </div>
        </div>

        <section className="s s1">
      <div className='hhhhhh'><h1 className="s-heading">Why Menstrual Healthcare at Feminergy is Different.</h1></div>
      <div className="box-container">
        <div className="box">
          <h2 className="box-heading">We protect your privacy</h2>
          <p className="box-paragraph">You can be sure that everything here is 100% confidential. And like a friend, we always reply so go ahead, ask us anything!</p>
        </div>
        <div className="box">
          <h2 className="box-heading">Personalised treatments</h2>
          <p className="box-paragraph">We know that menstrual care can never be one-size-fits-all. Your body and your cycle are just that- completely yours. We start by understanding your hormonal health before evaluating and discussing any treatments, if necessary.</p>
        </div>
      </div>
      <div className="box-container">
        <div className="box">
          <h2 className="box-heading">Evidence-based clinical excellence</h2>
          <p className="box-paragraph">The foundation of our care is based on clinical guidelines and protocols. We deliver care that results in better outcomes for our patients.</p>
        </div>
        <div className="box">
          <h2 className="box-heading">We don’t want you to settle</h2>
          <p className="box-paragraph">If you are experiencing painful cramps or heavy periods, we can help you evaluate what’s going on so you can prevent and manage pain.</p>
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