import React from 'react';
// fontawesome icons packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

const Footer = () => {
    // fontawesome icons
    const icon = <FontAwesomeIcon icon={faFacebook} />
    const icon2 = <FontAwesomeIcon icon={faInstagram} />
    const icon3 = <FontAwesomeIcon icon={faTwitter} />
    return (
        <div>
            <div  className="footer-div button-bg py-5">
                <h3 className="text-center text-white">Thorpe Park.</h3>
                <h5 className="text-white text-center">Contact Us</h5>
                <p className="text-center text-white">
                    email: thorpepark@gmail.com
                    <br />
                    phone: 031 658794-99
                  
                </p>
                <h5 className="text-center">Follow us: {icon} {icon2} {icon3}</h5>
            </div>
        </div>
    );
};

export default Footer;