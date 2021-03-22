
import React from 'react'

import './Family.scss'
import Ul from '../Ul/Ul';
import lines from '../../assets/imgs/patterns/pattern-lines.svg'
const Family = (props) => {
const txts = ['FAMILY GATHERING','SPECIAL EVENTS','SOCIAL EVENTS']
    return (
        <section className="family relative">
        <div className="family-container container">

        <div className="family-box flex  space-between">
            <div className="family-box-img relative">
                <img src={lines} alt="" className="img-line absolute" srcset=""/>
            </div>
            <div className="family-content flex column">
                <h2 className="family-title">
                Family Gathering
                </h2>
                <p className="family-p">We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
            <button className="btn btn-dark">Book A table</button>
            <Ul classNames="family-list flex column">
                {txts.map((txt,idx)=><li key={idx} className={`family-item ${idx===0 && 'active'}`}>{txt}</li>)}
            </Ul>
            </div>
        </div>
        </div>

        </section>
    )

   
}

export default Family
