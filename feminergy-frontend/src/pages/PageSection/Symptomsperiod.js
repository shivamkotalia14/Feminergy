import React from 'react';
import './Symptomspage.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';

const Symptomspage = () => {
  return (
    <div className='symptomspage'>
      <Navbar/>
      <div className='symptomspage_body'>
      <h1 className='symptoms_heading'>PERIOD- SYMPTOMS</h1>
        <div className='symptoms'>
        <h2 className='symptomspage_h2'> The common symptoms of PERIODS may include:</h2>
        <ul className='symptomspage_ul1'>
        <li className='symptomspage_li1'>Many individuals experience abdominal cramps, ranging from mild discomfort to severe pain, caused by the uterus contracting to shed its lining.</li>
        <li className='symptomspage_li1'>The most recognizable symptom is vaginal bleeding, typically lasting 3-7 days, as the body sheds the uterine lining.</li>
          <li className='symptomspage_li1'>Hormonal changes during menstruation can lead to feelings of tiredness or fatigue.</li>
          <li className='symptomspage_li1'>Fluctuations in estrogen and progesterone levels can affect neurotransmitters in the brain.</li>
          <li className='symptomspage_li1'>Excess body hair, including the face, chest, stomach, and back (hirsutism)</li>
          <li className='symptomspage_li1'>Hormonal fluctuations may cause water retention and bloating in the abdomen, leading to feelings of discomfort and a swollen sensation.</li>
          
          <li className='symptomspage_li1'>Some individuals experience breast tenderness or swelling due to hormonal changes during menstruation.</li>
          
          <li className='symptomspage_li1'>Hormonal fluctuations can trigger headaches or migraines in some individuals during their menstrual cycle.</li>
        </ul> 
        
       
          <br></br>
          
          
          <h3 className='symptomspage_h3'>When to visit a Doctor?</h3>
          <p className='symptomspage_p'>
          If you're experiencing issues related to your menstrual cycle, it's important to know when to seek medical attention. One key reason to visit a doctor is if you have irregular periods, where your cycle is unpredictable or significantly shorter or longer than usual. Another indicator is excessive bleeding during menstruation, particularly if it's heavy enough to require frequent pad or tampon changes. Severe menstrual pain that interferes with daily activities despite over-the-counter pain relief warrants medical evaluation. Missing periods without pregnancy or menopause could also signal an underlying issue. Additionally, if premenstrual symptoms severely affect your mood or functioning, or if you experience unusual symptoms like bleeding between periods, it's advisable to see a healthcare provider. Concerns about fertility or unexplained changes in weight or energy levels are further reasons to seek medical advice regarding menstrual health. In any of these situations, consulting with a doctor can provide insights, diagnosis, and appropriate treatment to address your concerns and promote overall well-being.
          </p>
          
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Symptomspage