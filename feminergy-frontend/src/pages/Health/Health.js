import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Grid, Container, Stack } from '@mui/material';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import causes from '../images/causes.png';
import fertility from '../images/fertility.png';
import mental from '../images/mental.png';
import sexual from '../images/sexual.png';
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
            Revolutionizing<span className='css-1dnpnbi'>  PCOD care</span> : Addressing roots for holistic wellness transformation.{' '}
            </Typography>
              <span> <button><Link className='css-671h10' to='/consult'>Consult Doctor</Link></button>
             <button><Link className='css-671h12' to='/dashboard'>Mood Tracker</Link></button> </span>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <img
              className='imagess'
              alt=" We understand your hormonal health to get to the root of your Menstrual Health."
              src="https://proactiveforher.com/_next/image/?url=https%3A%2F%2Fpfh-testing-images.s3.ap-south-1.amazonaws.com%2Ftreatments%2Fa9be6d53-8a31-4392-ac68-dc4a83adc01e&w=1920&q=75"
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
            <img src={causes} alt='pcod'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/causes">Know More</Link></button>
        </div>

        <div className='guide_card'>
          <div className='guide_title'>
            <h1>SYMPTOMS</h1>
          </div>
          <div className='guide_image'>
            <img src={symptoms} alt='pcod'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/symptoms">Know More</Link></button>
        </div>


        <div className='guide_card'>
          <div className='guide_title'>
            <h1>TREATMENT</h1>
          </div>
          <div className='guide_image'>
            <img src={treatment} alt='pcod'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/treatment">Know More</Link></button>
        </div>
        </div>
        
        <div className='guide_container'>
        <div className='guide_card'>
          <div className='guide_title'>
            <h1>PERIODS</h1>
          </div>
          <div className='guide_image'>
            <img src={periods} alt='pcod'></img>
          </div>
          <div className='guide_text'>
           
          </div>
          <button className='css-671h09'><Link to="/periods">Know More</Link></button>
        </div>

        <div className='guide_card'>
          <div className='guide_title'>
            <h1>FERTILITY</h1>
          </div>
          <div className='guide_image'>
            <img src={fertility} alt='pcod'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/fertility">Know More</Link></button>
        </div>

        <div className='guide_card'>
          <div className='guide_title'>
            <h1>SEXUAL HEALTH</h1>
          </div>
          <div className='guide_image'>
            <img src={sexual} alt='pcod'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/sexualhealth">Know More</Link></button>
        </div>
        </div>

        <div className='guide_container'>
        <div className='guide_card'>
          <div className='guide_title'>
            <h1>MENTAL HEALTH</h1>
          </div>
          <div className='guide_image'>
            <img src={mental} alt='pcod'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/mentalhealth">Know More</Link></button>
        </div>

        <div className='guide_card'>
          <div className='guide_title'>
            <h1>LONG TERM EFFECTS</h1>
          </div>
          <div className='guide_image'>
            <img src={longterm} alt='pcod'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/longterm">Know More</Link></button>
        </div>

        <div className='guide_card'>
          <div className='guide_title'>
            <h1>WORKOUT GUIDE</h1>
          </div>
          <div className='guide_image'>
            <img src={longterm} alt='pcod'></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='css-671h09'><Link to="/longterm">Know More</Link></button>
        </div>
        </div>
        <section className="s s1">
      <div className='hhhhhh'><h1 className="s-heading">Why PCOD care at Feminergy is Different.</h1></div>
      <div className="box-container">
        <div className="box">
          <h2 className="box-heading">We listen</h2>
          <p className="box-paragraph">Our doctors never dismiss your concerns. They listen, answer your questions, and together with you create a treatment plan that works for your lifestyle.</p>
        </div>
        <div className="box">
          <h2 className="box-heading">Personalised care</h2>
          <p className="box-paragraph">Whether you are already diagnosed or need answers to confusing symptoms, we work to build a treatment plan built around your hormonal health needs.</p>
        </div>
      </div>
      <div className="box-container">
        <div className="box">
          <h2 className="box-heading">Evidence-based, root-cause approach</h2>
          <p className="box-paragraph">We won’t leave you having more questions. We identify the root-cause to get to the bottom of your PCOD through extensive hormonal and metabolic testing.</p>
        </div>
        <div className="box">
          <h2 className="box-heading">Sustainable</h2>
          <p className="box-paragraph">We understand that managing your PCOD is long-term. A sustainable hormonal health plan is the key to success. We don’t give you false promises, or exaggerated claims.</p>
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