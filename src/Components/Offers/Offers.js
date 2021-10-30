import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Offer.css'

const Offers = (props) => {
    const {_id,image,name,price,description} = props.offer;

    const history = useHistory();
    const handleDetails = () => {
        
        history.push('/place-order');
    }
    return (
        <div>
            <div className="col">
                        <div className="card h-100">
                        <img src={image} className="card-img-top offer-image-size" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <h5 className="card-text">Tk: {price}/-</h5>
                            <p className="card-text">{description}</p>
                           <Link to={`/place-order/${_id}`}>
                            <button onClick={handleDetails} className="py-2 px-3 rounded button-bg">BUY NOW</button></Link>
                        </div>
                       
                        
                    </div>
                    
                </div> 
                
        </div>
    );
};

export default Offers;