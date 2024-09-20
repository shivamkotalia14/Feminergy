import React from 'react';
import './Symptomspage.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';

const Symptomspage = () => {
  return (
    <div className='symptomspage'>
      <Navbar/>
      <div className='symptomspage_body'>
      <h1 className='symptoms_heading'>PREGNANCY- SYMPTOMS</h1>
        <div className='symptoms'>
        <h2 className='symptomspage_h2'> The common symptoms of PERIODS may include:</h2>
        <ul className='symptomspage_ul1'>
        <li className='symptomspage_li1'>One of the most common early signs of pregnancy is a missed menstrual period, although some women may experience light spotting or irregular bleeding instead.</li>
        <li className='symptomspage_li1'> Many women experience nausea, often accompanied by vomiting, particularly in the morning, although it can occur at any time of the day.</li>
          <li className='symptomspage_li1'>Hormonal changes during pregnancy can lead to breast tenderness or swelling as early as one to two weeks after conception.</li>
          <li className='symptomspage_li1'>Feeling excessively tired or fatigued is common in early pregnancy due to hormonal changes and increased energy demands.</li>
          <li className='symptomspage_li1'> Increased blood flow to the pelvic area and pressure on the bladder from the growing uterus can lead to more frequent urination, especially in the first and third trimesters.</li>
          <li className='symptomspage_li1'>Changes in taste and smell sensitivity may result in food cravings or aversions to certain smells or tastes.</li>
          
          <li className='symptomspage_li1'>Some women may experience light spotting or implantation bleeding when the fertilized egg attaches to the uterine lining, typically around the time of the expected period.</li>
          
          <li className='symptomspage_li1'>Some women report increased sensitivity to odors, which can trigger nausea or aversions to certain smells.</li>
        </ul> 
        
       
          <br></br>
          
          
          <h3 className='symptomspage_h3'>When to visit a Doctor?</h3>
          <p className='symptomspage_p'>
          Visiting a doctor early in pregnancy is crucial for ensuring both maternal and fetal health. Ideally, scheduling the first prenatal appointment as soon as a woman suspects she might be pregnant is recommended. However, if a home pregnancy test confirms pregnancy, it's advisable to schedule an appointment promptly, typically within the first 8 to 10 weeks of pregnancy.

During the initial prenatal visit, the doctor will perform a comprehensive evaluation, which may include a physical exam, review of medical history, and discussion of lifestyle factors. Essential prenatal tests, such as blood tests to confirm pregnancy and assess blood type, Rh factor, and screening for infections, may also be conducted. The doctor will provide guidance on prenatal vitamins, diet, exercise, and lifestyle modifications to optimize maternal and fetal health.

Subsequent prenatal visits will be scheduled regularly throughout the pregnancy to monitor the progress of both the mother and the baby. These visits allow for ongoing assessment of maternal health, fetal growth, and development, as well as the detection of any potential complications. Additionally, prenatal appointments offer opportunities for education, counseling, and support for expectant parents as they navigate the journey of pregnancy and prepare for childbirth and parenthood. Early and regular prenatal care plays a critical role in promoting a healthy pregnancy and reducing the risk of complications for both the mother and the baby.
          </p>
          
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Symptomspage