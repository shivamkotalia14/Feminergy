import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Grid, Container, Stack } from '@mui/material';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
// import mainpage from '../images/mainpage.png';
import './Homepage.css';

const Homepage = () => {
  
  return (
    <div className='intro'>
        <Navbar/>
        <div className='int'>
        <Container  maxWidth="xl" disableGutters>
      <Grid className='ttttt' container spacing={2} justifyContent="center">
        <Grid item xs={12} md={5}>
          <Stack className='css-136pb33' spacing={2}>
            <Typography className='css-1ekzvl9' variant="h3">
            Gaining insight into your hormonal landscape is the gateway to nurturing{' '}
              <span className='css-1dnpnbi'>holistic wellness</span>.
              
              
            </Typography>
            <span> <button><Link className='css-671h13' to='/consult'>Book Appointment</Link></button>
             <button><Link className='css-671h12' to='/chatbot' target='_blank'>Ask Doubts</Link></button> </span>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <img
              className='image'
              alt=" We understand your hormonal health to get to the root of your Menstrual Health."
              src="https://proactiveforher.com/_next/image/?url=https%3A%2F%2Fpfh-images-production.s3.ap-south-1.amazonaws.com%2FHero_Image_1_e54d12f321.png&w=1920&q=75"
              style={{ width: '100%', height: 'auto' }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
    </div>
    
    <section className="MuiBox-root imgss css-w0msmy" id="value-proposition">
      <Container maxWidth="lg" className="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2">
        <div className="MuiStack-root  css-1xfynxl">
          <Grid container spacing={3} spacing-md={5} className="MuiGrid-root  MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-spacing-md-5 css-1afa9wr">
            <Grid item xs={4} md={4} className="MuiGrid-root llll MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 css-1em1lls">
              <Typography variant="h2" className="MuiTypography-root tut MuiTypography-body1 css-1btt8ac">150,000+</Typography>
              <Typography variant="h4" className="MuiTypography-root tut MuiTypography-body1 css-11ez56n">women trust us with their health</Typography>
            </Grid>
            <Grid item xs={4} md={4} className="MuiGrid-root llll MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 css-1em1lls">
              <Typography variant="h2" className="MuiTypography-root tut MuiTypography-body1 css-1btt8ac">1/5</Typography>
              <Typography variant="h4" className="MuiTypography-root tut MuiTypography-body1 css-11ez56n">Women faces Health Issues</Typography>
            </Grid>
            <Grid item xs={4} md={4} className="MuiGrid-root llll MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 css-1em1lls">
              <Typography variant="h2" className="MuiTypography-root tut MuiTypography-body1 css-1btt8ac">100%</Typography>
              <Typography variant="h4" className="MuiTypography-root tut MuiTypography-body1 css-11ez56n">Compassionate support at every visit</Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
    
    <section className="services-section">
      <div className="container">
      <h2 className="section-heading">Our Services</h2>
        <p className="section-paragraph">We care deeply about <span className='hhh'> women's health</span>. Our services are tailored to provide comprehensive care and support for girls and women of all ages.</p>
        <div className="cards">
          <div className="card">
            <img src="https://img.theweek.in/content/dam/week/news/health/images/2019/9/26/period_talk.jpg" alt="Service 1" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Period Wellness</h3>
              <p className="card-description">Period wellness fosters balance in menstruation <br></br> for overall well-being.</p>
              <button className='hhhjh'><Link className='card-button' to='/Period'>Read More</Link></button>
            </div>
          </div>
          <div className="card">
            <img src="https://proactiveforher.com/_next/image/?url=https%3A%2F%2Fpfh-images-production.s3.ap-south-1.amazonaws.com%2FConsultation_f9ddf4dc4e.png&w=1920&q=75" alt="Service 2" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Book Appointment</h3>
              <p className="card-description">Our Consults are conversations so you make informed decisions.</p>
              <button className='hhhjh'><Link className='card-button' to='/consult'>Book Now</Link></button>
            </div>
          </div>
          <div className="card">
            <img src="https://th.bing.com/th/id/R.72ba6d3ac1edf8101a2d19809f05f8c2?rik=LO6OOy22r0N99Q&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f100000%2fvelka%2fpregnancy-1410054208WaL.jpg&ehk=jhCchFlqOV6Es08GhVjQiHmsi%2bwVy%2bpOsm4m4YbvnvU%3d&risl=&pid=ImgRaw&r=0" alt="Service 2" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Pregnancy</h3>
              <p className="card-description">Pregnancy wellness prioritizes holistic care to support the health of both mother and baby.</p>
              <button className='hhhjh'><Link className='card-button' to='/Pregnancy'>Read More</Link></button>
            </div>
          </div>
          <div className="card">
            <img src="https://images.onlymyhealth.com/imported/images/2021/January/25_Jan_2021/big1_pcodpcos.jpg" alt="Service 2" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">PCOD+PCOS</h3>
              <p className="card-description">PCOD and PCOS are hormonal disorders affecting reproductive-aged individuals, characterized by irregular periods and hormonal imbalances.</p>
              <button className='hhhjh'><Link className='card-button' to='/Health'>Checkout</Link></button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="s">
      <div className='hhhhhh'><h1 className="s-heading">Why Women Healthcare at Feminergy is Different.</h1></div>
      <div className="box-container">
        <div className="box">
          <h2 className="box-heading">We protect your privacy</h2>
          <p className="box-paragraph">You can be sure that everything here is 100% confidential. And like a friend, we always reply so go ahead, ask us anything!</p>
        </div>
        <div className="box">
          <h2 className="box-heading">We listen</h2>
          <p className="box-paragraph">Our doctors never dismiss your concerns. They listen, answer your questions, and together with you create a treatment plan that works for your lifestyle.</p>
        </div>
      </div>
      <div className="box-container">
        <div className="box">
          <h2 className="box-heading">Compassionate Care</h2>
          <p className="box-paragraph">We prioritise providing compassionate care to our patients by understanding the emotional and physical challenges of pregnancy.</p>
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
  )
}

export default Homepage