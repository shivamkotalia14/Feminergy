import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from '../pages/images/trans-logo.png'
// import mainpage from '../images/Feminergy.png';
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  

  const handleLogin = () => {
    window.location.href = '/login';
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const getIsLoggedIn = () => {
    return localStorage.getItem("isLogin") === "true";
  };

  useEffect(() => {
    setIsLoggedIn(getIsLoggedIn());
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };

  return (
    <div>
      <div className='main_nav'>
        <img className='logo_container' src={logo} alt='img' style={{ width: '140px', height: '90px' }}/>
        <div className='logo_containers'>FEMINERGY</div>
        <div className='element_container'>
          <ul className='uyt'>
            <li><Link to="/">Home</Link></li>
            <li className="dropdown" onClick={toggleDropdown}>
              <button className="dropbtn">What We Treat</button>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/Period">Menstrual Health</Link>
                  <Link to="/Pregnancy">Pregnancy</Link>
                  {/* <Link to="/Services">Services</Link> */}
                  <Link to="/Health">PCOD+PCOS</Link>
                  {/* <Link to="/Health">PCOD+PCOS</Link> */}
                  {/* <Link to="/Health">PCOD+PCOS</Link> */}
                  <Link to="#">Fertility</Link>
                  <Link to="#">Ppostpartum</Link>
                  <Link to="#">Pelvic Health</Link>
                </div>
              )}
            </li>
            <li className="dropdown" onClick={toggleDropdown1}>
              <button className="dropbtn">Services</button>
              {dropdownOpen1 && (
                <div className="dropdown-content">
                  <Link to="https://pharmeasy.in/online-medicine-order?isSEM=true&&utm_source=bing&utm_medium=cpc&utm_campaign=[GSB_Bing]&utm_term=%2Bpharmeasy&utm_adgroup=Core-Broad&placement_id_identifier=&ad_group_id_identifier=1144592104946695&device=c&location=158292&msclkid=1975396e021e10a8838a5f4f246550a6&utm_content=Core%20-%20Broad" target='_blank'>Buy Medicines</Link>
                  <Link to="https://pharmeasy.in/diagnostics" target='_blank'>Lab Test</Link>
                  {/* <Link to="/Services">Services</Link> */}
                  <Link to="https://pharmeasy.in/health-care?src=header" target='_blank'>Health Care Products</Link>
                  <Link to="http://127.0.0.1:9090/" target='_blank' >Diet Plan</Link>
                </div>
              )}
            </li>
            {/* <li><Link to="" target='_blank'></Link></li> */}
            <li><Link to="/consult">Appointment</Link></li>
            <li><Link to="http://localhost:5000/" target='_blank'>Sakhiya</Link></li>
            {isLoggedIn ? (<li><Link to="/dashboard">Dashboard</Link></li>) : null}
            <li>{isLoggedIn ? (
              <button className='css-671h14' onClick={handleLogout}>Logout</button>) : (<button className='css-671h14' onClick={handleLogin}>Login</button>)}</li>
            <li>
              {/* <button className='css-671h14' >Logout</button> */}
              {/* <Link to="/chatbot">Appointment</Link> */}
              </li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar