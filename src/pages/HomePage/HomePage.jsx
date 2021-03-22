
import React from 'react'

import './HomePage.scss'
import Highlights from '../../cmps/Highlights/Highlights';
import Hero from '../../cmps/Hero/Hero';
import About from '../../cmps/About/About';
import Family from '../../cmps/Family/Family';
import Contact from '../../cmps/ContactUs/ContactUs';

const HomePage = (props) => {

    return (
        <section className="home-page">
            <Hero></Hero>
            <About></About>
        <Highlights></Highlights>
        <Family></Family>
        <Contact></Contact>
        </section>
    )

   
}

export default HomePage
