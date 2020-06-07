import React from 'react';

import './footer.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item">
                                <a href="#">About</a>
                            </li>
                            <li className="list-inline-item">&sdot;</li>
                            <li className="list-inline-item">
                                <a href="#">Contact</a>
                            </li>
                            <li className="list-inline-item">&sdot;</li>
                            <li className="list-inline-item">
                                <a href="#">Terms of Use</a>
                            </li>
                            <li className="list-inline-item">&sdot;</li>
                            <li className="list-inline-item">
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2019. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mr-3">
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebook} className='m-auto text-primary fa-2x fa-fw'/>
                                </a>
                            </li>
                            <li className="list-inline-item mr-3">
                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitterSquare} className='m-auto text-primary fa-2x fa-fw'/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <FontAwesomeIcon icon={faInstagram} className='m-auto text-primary fa-2x fa-fw'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;