import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Appointment from './pages/Appointment/Appointment';
import Consult from './pages/Consult/Consult';
import Dashboard from './pages/Dashboard/Dashboard';
import Health from './pages/Health/Health';
import Online from './pages/Online/online';
import Services from './pages/Services/Services';
import Period from './pages/Period/Period';
import PeriodForm from './pages/PeriodForm/PeriodForm';
import PregnancyForm from './pages/PregnancyForm/PregnancyForm';
import MoodForm from './pages/MoodForm/MoodForm';
import Pregnancy from './pages/Pregnancy/Pregnancy';
import Faq from './components/Faq';
import BotpressChat from './components/BotpressChat'; // Import the BotpressChat component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/chatbot' element={<BotpressChat />} /> {/* Render the BotpressChat component on a separate route */}
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/appointment/:docID' element={<Appointment />} />
          <Route exact path='/consult' element={<Consult />} />
          <Route exact path='/online' element={<Online />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/Period' element={<Period />} />
          <Route exact path='/periodform' element={<PeriodForm />} />
          <Route exact path='/pregnancyform' element={<PregnancyForm />} />
          <Route exact path='/moodform' element={<MoodForm />} />
          <Route exact path='/Pregnancy' element={<Pregnancy />} />
          <Route exact path='/Services' element={<Services />} />
          <Route exact path='/Health' element={<Health />} />
          <Route exact path='/faq' element={<Faq />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
