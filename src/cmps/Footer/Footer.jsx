
import React from 'react'
import logo from '../../assets/imgs/logo.svg'

import './Footer.scss'

const Footer = (props) => {

    return (
        <footer className="footer">
            <div className="footer-container container flex">
                <img src={logo} className="logo" alt="" srcset="" />
                <div className="footer-content flex column">
                    <p> Marthwaite, Sedbergh</p>
                    <p>Cumbria</p>
                    <p>+00 44 123 4567</p>
                </div>
                <div className="footer-contact-us flex column">
                    <p> OPEN TIMES</p>
                    <p>MON - FRI: 09:00 AM - 10:00 PM</p>
                    <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
                </div>
            </div>
        </footer>
    )


}

export default Footer
