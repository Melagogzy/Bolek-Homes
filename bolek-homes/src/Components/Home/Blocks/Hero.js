import React from 'react'

import { Link } from "react-router-dom";

import heroBg from '../../../images/hero.jpg'

import heroBgSmall from '../../../images/hero.jpg'
import './Hero.css'

const Hero = () => {
  return (
   
    <div>

       {/***DESKTOP VIEW***/}
    <div className="uk-visible@s"
    
    style={{ 
    
    backgroundImage: `-webkit-linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBg})`,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '100px',
    height: '90vh'

}}
       
    >
            
            <div className="uk-container" >
            <div className="uk-grid  " data-uk-grid>
                 <div className="uk-width-1-2@s">
                      <div className="uk-margin-xlarge-top heroHeader " >
                          <h1 className="" uk-scrollspy="cls: uk-animation-slide-left; repeat: true"> Welcome Home</h1>
                          <p className="subTitleText" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Trust us to support your child on their academic path, learn new skills and prepare for the world of 
                              tomorrow. We carefully select the right people and strive to innovate additional education for your benefit.</p>
                      </div>

                      <div class="  hero-btn ">
                         <Link to="/courses">About Us
                           </Link>
                        
                      </div>
  
                 </div>

                 <div className="uk-width-1-2@s">
                     
                 </div>
            </div>
            </div>
        </div>




          {/***MOBILE VIEW***/}
    <div className="uk-hidden@s"
    
    style={{ 
    
      backgroundImage: `-webkit-linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBg})`,
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      paddingBottom: '100px',
      height: '100vh'
  
  }}
       
    >
            
            <div className="uk-container" >
            <div className="uk-grid  " data-uk-grid>
                 <div className="uk-width-3-4@s">
                      <div className="uk-margin-xlarge-top " >
                          <h1 className="header1 light withPadding" uk-scrollspy="cls: uk-animation-slide-left; repeat: true"> Over 10 years experience in turning young minds into future tech savvys</h1>
                          <p className="subTitleText" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Trust us to support your child on their academic path, learn new skills and prepare for the world of 
                              tomorrow. We carefully select the right people and strive to innovate additional education for your benefit.</p>
                      </div>

                      <div class="uk-flex withPadding ">
                         <Link to="/courses"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">See all Courses</div> </Link>
                        <Link to='/contactus'> <div class=" btn-ghost uk-text-center uk-margin-left" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">Contact Us</div></Link>
                        
                      </div>
  
                 </div>

                 <div className="uk-width-1-4@s">
                     
                 </div>
            </div>
            </div>
        </div>





        </div>
  )
}

export default Hero