import React from 'react';
import './Offer.css'
const Offers = (props) => {
    const {image,name,price,description} = props.offer;
    return (
        <div>
            <div className="col">
                        <div className="card h-100">
                        <img src={image} className="card-img-top offer-image-size" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <h5 className="card-text">Tk: {price}/-</h5>
                            <p className="card-text">{description}</p>
                            <button className="py-2 px-3 rounded button-bg">BUY NOW</button>
                        </div>
                       
                        
                    </div>
                    
                </div> 
                
        </div>
    );
};

export default Offers;