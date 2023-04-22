import React from 'react'
import './Hero.css'
import Icon1 from '../../../images/icon1.png'
import Icon2 from '../../../images/icon2.png'
import Icon3 from '../../../images/icon3.png'

const Second_Pane = () => {
  return (
    <div className='home_second_pane uk-margin-xlarge-top'>
        
           <div className='uk-grid' data-uk-grid>
                 <div className=' uk-width-2-5@s'>
                    <div className='home_second_Pane_Intro'>
                        <div>
                            <h6>Our Advantage</h6>
                            <h1>Why Choose Us</h1>
                        </div>
                    </div>
                 </div>


                 <div className='uk-width-3-5@s'>
                  
                 </div>
           </div>


           <div className='uk-container uk-margin-large-bottom' >
                   <div className='uk-flex uk-flex-center'>
                       <div className='home_second_pane_blurb'>
                            <img src={Icon1 } />
                            <h4 className='uk-text-bolds'>Affordable Home</h4>
                            <p>Our properties are located at prime areas which
                                 guarantees return on  investment..</p>
                       </div>

                       <div className='home_second_pane_blurb  uk-margin-left'>
                       <img src={Icon2 } />
                            <h4 className='uk-text-bolds'>High ROI</h4>
                            <p>We have been in business for over 16 years, for
                                 clients in diaspora you can trust us to deliver 
                                 well finished homes.</p>
                       </div>

                       <div className='home_second_pane_blurb  uk-margin-left'>
                       <img src={Icon3 } />
                            <h4 className='uk-text-bolds'>Reliable Partner</h4>
                            <p>Our homes are very affordable, we have something
                                 for both the high & middle class earners with
                                  flexible payment plans.</p>
                       </div>

                       <div className='home_second_pane_blurb uk-margin-left'>
                       <img src={Icon1 } />
                            <h4 className='uk-text-bolds'>Excellence</h4>
                            <p>Our estates comes with good road network, 
                                portable water, 24hrs light & round the
                                 clock security etc.</p>
                       </div>
                   </div>



           </div>
          
        
        
        
        </div>
  )
}

export default Second_Pane