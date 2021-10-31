import React from 'react';
import ParkInfoBanner from '../Images/parkInfo.jpg'
import './About.css'
import ticket from '../Images/ticket.jpg'
import map from '../Images/map.jpg'
import calendar from '../Images/calender.jpg'
import parking from '../Images/parking.jpg'
import faq from '../Images/faq.jpg'

const About = () => {
    return (
        <div>
            <div className="card  text-white ">
            <img src={ParkInfoBanner} className="card-img banner-size" alt="..."/>
            <div className="card-img-overlay w-75 d-flex mx-auto align-items-end mb-3 ">
               <div className="text-center banner-title text-white banner-color p-4">
               <h1 className="card-title">PARK INFO</h1>
                <h3>Anything and Everything about Thorpe Park</h3>
                <p className="card-text">Do you have questions about the park before you even visit? Here you can find information about tickets, season passes, hours, calendar, park map and much, much more. If you can't find what you are looking for, please call our operator line and they will help assist you</p>
               </div>
                
            </div>
            </div>

           <div className="d-lg-flex">
           <div className="ms-5 info-card">
            <div className="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
                <h5 className="card-title text-center"> Information</h5>
                <div className="card text-white bg-info mb-3" style={{maxWidth: "18rem"}}>
                <div className="card-header text-center">CONTACT US</div>
                <div className="card-body">
                    <h6>address: O.R. Nizam Road, Chittagong</h6>
                    <h6 >phone: 031 698782</h6>
                    <h6 >email: thorpepark@gmail.com</h6>
                </div>
                </div>
            </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto my-5">
                
                <div className="col arrow">
                    <div class="card">
                    <img src={ticket} className="card-img-top event-image" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">TICKETS</h5>
                        
                    </div>
                    </div>
                </div>
                <div className="col arrow">
                    <div className="card">
                    <img src={map} className="card-img-top event-image" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">PARK MAP</h5>
                        
                    </div>
                    </div>
                </div>
                <div className="col arrow">
                    <div className="card">
                    <img src={calendar} className="card-img-top event-image" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">CALENDAR</h5>
                        
                    </div>
                    </div>
                </div>
                <div className="col arrow">
                    <div className="card">
                    <img src={parking} className="card-img-top event-image" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">PARKING</h5>
                        
                    </div>
                    </div>
                </div>
                <div className="col arrow">
                    <div className="card">
                    <img src={faq} className="card-img-top event-image" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">FAQ/RULES</h5>
                        
                    </div>
                    </div>
                </div>
              
                </div>
           </div>
        </div>
    );
};

export default About;