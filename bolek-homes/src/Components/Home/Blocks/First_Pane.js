import React from 'react'
import pane_img from '../../../images/pane_img.jpg'

import { Link } from "react-router-dom";

const First_Pane = () => {
  return (
    <div className='container uk-margin-large-top'>
        <div className='row '>
           <div className='col-sm-8'>
              <div
                style={{ 
    
                    backgroundImage: ` url(${pane_img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    paddingBottom: '100px',
                    height:'55vh'
             
                
                }}
              
              
              
              >

                </div>
           </div>

           <div className='col-sm-4'>
               <div className='uk-margin-top '>
                   <h1 style={{color:'#1d4344'}}>We Build Trust</h1>
                   <h5 className='goldText' style={{marginTop:'0px'}}>Lorem Ipsum is simply dummy of</h5>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                     has been the industry's standard dummy text ever since the 1500s,</p>

                     
                     <div class="  green-btn ">
                         <Link to="/courses">About Us
                           </Link>
                        
                      </div>
               </div>
           </div>
        </div>
    </div>
  )
}

export default First_Pane