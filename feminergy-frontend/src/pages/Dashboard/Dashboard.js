import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import user from '../images/user.webp'
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import "./Dashboard.css";
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const [period, setPeriod] = useState([]);
  const [pregnancy, setPregnancy] = useState([]);
  const [mood, setMood] = useState([]);
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  useEffect(() => {
    // Fetch doctors from MongoDB
    const fetchData = async () => {
      const response = await fetch('http://localhost:5005/tracker/');
      const datas = await response.json();

      const perioddata = datas.period.flatMap((monthData, monthIndex) => {
        const monthYear = new Date(getCurrentYear(), monthIndex, 1);
        const numDays = daysInMonth(monthIndex, getCurrentYear());
        return Array.from({ length: numDays }, (_, dayIndex) => ({
          date: new Date(monthYear.getFullYear(), monthYear.getMonth(), dayIndex + 1),
          count: monthData[dayIndex] || 1,
        }));
      });
      
      const mooddata = datas.mood.flatMap((monthData, monthIndex) => {
        const monthYear = new Date(getCurrentYear(), monthIndex, 1);
        const numDays = daysInMonth(monthIndex, getCurrentYear());
        return Array.from({ length: numDays }, (_, dayIndex) => ({
          date: new Date(monthYear.getFullYear(), monthYear.getMonth(), dayIndex + 1),
          count: monthData[dayIndex] || 1,
        }));
      });
      const pregnancydata = datas.pregnancy.flatMap((monthData, monthIndex) => {
        const monthYear = new Date(getCurrentYear(), monthIndex, 15);
        const numDays = daysInMonth(monthIndex, getCurrentYear());
        return Array.from({ length: numDays }, (_, dayIndex) => ({
          date: new Date(monthYear.getFullYear(), monthYear.getMonth(), dayIndex + 4),
          count: monthData[dayIndex] || 1,
        }));
      });
      setPeriod(perioddata)
      setMood(mooddata)
      setPregnancy(pregnancydata)
    };

    fetchData();
  }, []);



  return (
    <div>
      <Navbar/>
    <div className='dashboardpage'>
      
      <div className='userprofile'>
      <div className='profile_card'>
          <div className='profile_title'>
            <h2>WELCOME!</h2>
          </div>
          <div className='profile_image'>
            <img src={user} alt='img'></img>
          </div><br></br>
          <div className='profile_text'>
            <p>Hope you're having a bright day!</p>
          </div>
          <div className='profile_button_container'>
          <button className='profile_button'> <Link to={`/consult`}>BOOK APPOINTMENT</Link></button>
          {/* <button className='profile_button'><Link to={`/guide`}>Visit Guide </Link></button> */}
          </div>
        </div>
      </div>
      <div className='monthlycontainer'>
    <div className="monthly-tracker">
      <p className='per-p'><strong>PERIOD TRACKER</strong>- depends upon the bleeding (darker, the more bleeeding)</p>
      <CalendarHeatmap
        startDate={new Date(getCurrentYear(), 0, 1)}
        endDate={new Date(getCurrentYear(), 11, 31)}
        values={period}
        showWeekdayLabels={false}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
      />

      <p className='per-p'><strong>MOOD TRACKER</strong>- depends upon how you feel (dark yellow- more sunshine)</p>
      <CalendarHeatmap
        startDate={new Date(getCurrentYear(), 0, 1)}
        endDate={new Date(getCurrentYear(), 11, 31)}
        values={mood}
        showWeekdayLabels={false}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count+5}`;
        }}
      />
      <p className='per-p'><strong>PREGNANCY TRACKER</strong>- depends upon how you feel (dark green- more healthy)</p>
      <CalendarHeatmap
        startDate={new Date(getCurrentYear(), 0, 1)}
        endDate={new Date(getCurrentYear(), 11, 31)}
        values={pregnancy}
        showWeekdayLabels={false}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count+10}`;
        }}
      />

    </div>
    </div>
    
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
};

export default Dashboard;