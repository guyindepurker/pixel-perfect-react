
import React from 'react'
import './Hero.scss'
import Header from '../Header/Header';

const Hero = (props) => {

    return (
        <>

        <section className="hero">
        <Header />
           <div className="hero-container container">
               <div className="hero-content flex column" >
                   <h1 className="hero-title">Exquisite dining 
since 1989</h1>
                   <p className="hero-p">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                   <button className="btn">Book a table</button>
               </div>
           </div>
        </section>
        </>
    )


}

export default Hero
