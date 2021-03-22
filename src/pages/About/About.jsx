
import React from 'react'
import lines from '../../assets/imgs/patterns/pattern-lines.svg'

import './About.scss'
import Line from '../../cmps/Line/Line';

const About = (props) => {

    return (
        <section className="about">
            <div className="about-container container flex column">
                <div className="about-box about-box-1 flex relative space-between ">
                    <div className="about-img about-img-1">

                    </div>
                    <div className="about-content flex column">
                        <Line></Line>
                        <h2 className="about-title">Enjoyable place
for all the family</h2>
                        <p className="about-p">Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
                    </div>
                </div>
                <div className="about-box relative flex space-between ">

                    <div className="about-content flex center-center column">
                        <div className="align-left">
                        <Line></Line>

                        </div>
                        <h2 className="about-title">The most locally sourced food</h2>
                        <p className="about-p">All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
                    </div>
                    <div className="about-img about-img-2 relative">

                        <img src={lines} className="lines " />
                    </div>
                </div>





            </div>
        </section>
    )


}

export default About
