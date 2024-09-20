import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import './Causespage.css'

const Causespage = () => {
  return (
    <div className='causepage'>
        <Navbar/>
        <div className='causepage_body'>
            <h1 className='causes_heading'>PREGNANCY- CAUSES</h1>
            <div className='causespage_intro'>
                <p className='Causespage_p'>
                Pregnancy is a complex biological process influenced by various factors. The primary cause is sexual intercourse during the woman's fertile window, typically around ovulation, when a mature egg is released from the ovary and is available for fertilization. Sperm released during intercourse can fertilize the egg if present in the reproductive tract.
                </p><br></br>
                <p className='Causespage_p'>
                Several factors can affect fertility and increase the likelihood of pregnancy. These include timing intercourse with ovulation, overall reproductive health of both partners, and factors such as age, hormonal balance, and lifestyle choices like diet and exercise.

Health conditions can also impact pregnancy. For instance, conditions such as polycystic ovary syndrome (PCOS) or endometriosis can affect ovulation and fertility. Additionally, sexually transmitted infections (STIs) may lead to complications affecting fertility or the ability to carry a pregnancy to term.
                </p><br></br>
                <p className='Causespage_p'>
                Overall, pregnancy is a multifaceted phenomenon influenced by a combination of biological, environmental, and lifestyle factors. Understanding these causes can help individuals make informed decisions about their reproductive health and take necessary steps to optimize their chances of conception and a healthy pregnancy.
                </p>
            </div>
            
            <br></br>
            
            
        </div>
        <Footer/>
    </div>
  )
}

export default Causespage