import React from 'react';
import notFound from '../../Components/Images/NotFound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className="not-found-image-size" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;