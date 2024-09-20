import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import './Causespage.css'

const Causespage = () => {
  return (
    <div className='causepage'>
        <Navbar/>
        <div className='causepage_body'>
            <h1 className='causes_heading'>PERIOD- CAUSES</h1>
            <div className='causespage_intro'>
                <p className='Causespage_p'>
                The menstrual period, commonly referred to as "period," is a natural and cyclical process that occurs in individuals with female reproductive systems typically between puberty and menopause. Lasting approximately 28 days, though it can vary widely among individuals, the menstrual cycle is orchestrated by intricate hormonal changes designed to prepare the body for pregnancy.
                </p><br></br>
                <p className='Causespage_p'>
                At the beginning of the menstrual cycle, the brain's hypothalamus signals the pituitary gland to release follicle-stimulating hormone (FSH) and luteinizing hormone (LH). These hormones stimulate the ovaries to produce estrogen and progesterone. Estrogen prompts the thickening of the uterine lining, known as the endometrium, in preparation for potential implantation of a fertilized egg.
                </p><br></br>
                <p className='Causespage_p'>
                Menstrual bleeding, or menstruation, typically lasts 3-7 days, during which the body expels the unfertilized egg and the thickened endometrial tissue through the vagina. The average menstrual flow is around 30-80 milliliters of blood, though this can vary. Throughout this process, individuals may experience various symptoms, including abdominal cramps, bloating, breast tenderness, mood swings, and fatigue, due to hormonal fluctuations.
                </p>
            </div>
            
            <br></br>
            <div className='types'>
                <h1 className='Causespage_h1'> TYPES OF PERIODS</h1>
                
                <ul className='Causespage_ul'>
                    <br></br>
                    <li className='Causespage_li'><h3 className='Causespage_h3'>Regular vs. Irregular Periods</h3>
                        <p className='Causespage_p'>Regular periods occur at predictable intervals, typically every 21 to 35 days, while irregular periods may vary in timing and flow, sometimes indicating underlying health issues.
                        </p>

                    </li>
                    <br></br>
                    <li className='Causespage_li'><h3 className='Causespage_h3'>Heavy vs. Light Periods</h3>
                        <p className='Causespage_p'>Period flow can vary in intensity, with some individuals experiencing heavier bleeding (menorrhagia) and others experiencing lighter flows (hypomenorrhea).
                        </p> 
                    </li>
                    <br></br>
                    <li className='Causespage_li'> <h3 className='Causespage_h3'>Long vs. Short Periods</h3>
                        <p className='Causespage_p'>The duration of menstrual bleeding can vary among individuals, with some experiencing shorter periods lasting only a couple of days and others experiencing longer periods lasting a week or more.
                        </p>
                    </li>
                    <br></br>
                    <li className='Causespage_li'> <h3 className='Causespage_h3'>Scanty vs. Normal Flow</h3>
                        <p className='Causespage_p'>Scanty periods involve very light bleeding, while normal flow periods have a typical amount of menstrual blood loss. Spotting: Some individuals may experience spotting between periods, which is light, irregular bleeding that may occur for various reasons, including hormonal fluctuations or underlying health conditions.
                        </p>
                    </li>
                </ul>

            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default Causespage