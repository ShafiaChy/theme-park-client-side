import React from 'react';
import {useState,useEffect} from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import slideOne from '../Images/slideOne.jpg'
import slideTwo from '../Images/slideTwo.jpg'
import slideThree from '../Images/slideThree.jpg'
import Offers from '../Offers/Offers'
import benefits from '../Images/benefits.jpg'
import './Home.css'
import planningOne from '../Images/planningOne.jpg'
import planningTwo from '../Images/planningTwo.jpg'
import planningThree from '../Images/planningThree.jpg'
import useAuth from '../Hooks/useAuth';


const Home = () => {
     // offers data state
   const [offers, setOffers] = useState([]);
   const {isLoading} = useAuth()

   useEffect(() => {
    fetch('https://haunted-dungeon-90790.herokuapp.com/offers')
    .then(res => res.json())
    .then(data => setOffers(data))

    },[])
    
    if (isLoading){
        return <Spinner className="d-flex mx-auto spinner-position" animation="grow" />;
    } 

    return (
        <div>
            <Carousel variant="dark" >
                <Carousel.Item>
                    <img
                    className="d-block w-100 image-size"
                    src={slideOne}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 className="text-white slide-caption">Thorpe Park</h1>
                    <p className="text-white fs-3 slide-caption">Bangladesh's most thrilling theme park</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 image-size"
                    src={slideTwo}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h1 className="text-white slide-caption">Rides And Experiences</h1>
                    <p className="text-white fs-3 slide-caption">From 17 world-class roller coasters to three areas filled with rides and attractions for kids and families, plus an 18-acre waterpark with plunging slides,plus an 18-acre waterpark with plunging slides.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 image-size"
                    src={slideThree}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h1 className="text-white slide-caption">Buy Tickets From Home</h1>
                    <p className="text-white fs-3 slide-caption">Purchase tickets and make reservations.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="bg-dark py-3 mb-5"><h1 className="text-center text-white">What do we offer?</h1></div>
               <div className="mb-5 py-5 mx-auto row row-cols-1 row-cols-md-3 w-75 g-4">
                {
                        offers.map(offer => <Offers
                        key = {offer.key}
                        offer = {offer}></Offers>)
                }
              </div>
             
              <div className="w-75 mx-auto card mb-5 ">
                <img src={benefits} className="card-img-top first-section-image-height" alt="..."/>
                <div className="card-body ">
                    <h1 className="card-title text-center first-section">The Exclusive Benefits are Right Next Door</h1>
                    <h5 className="text-center first-section">Guests of the Thrope Park Resorts receive great benefits.</h5>
                    <p className="card-text text-center first-section">Discounted ticket packages available that include free Thrope Park fountain beverages, Early Entry, parking and more!</p>
                    <button className="rounded-pill py-2 px-3 d-flex mx-auto button-bg text-white">Learn more</button>
                   
                </div>
            </div>
           <div className="mt-5">
           <h5 className="text-center mt-5">Need help planning your visit?</h5>
                <h1 className="text-center first-section">What's the occasion?</h1>
           </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto my-5">
                
                <div className="col arrow">
                    <div class="card">
                    <img src={planningOne} className="card-img-top event-image" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Hanging out with friends</h5>
                        
                    </div>
                    </div>
                </div>
                <div className="col arrow">
                    <div className="card">
                    <img src={planningTwo} className="card-img-top event-image" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Spending Time with family</h5>
                        
                    </div>
                    </div>
                </div>
                <div className="col arrow">
                    <div className="card">
                    <img src={planningThree} className="card-img-top event-image" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Spending time with the special one</h5>
                        
                    </div>
                    </div>
                </div>
              
                </div>
        </div>
    );
};

export default Home;