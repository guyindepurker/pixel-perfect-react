
import React from 'react'

import './Highlights.scss'
import BookList from '../BookList/BookList';
import img1 from '../../assets/imgs/menu/menu-item1.jpg'
import img2 from '../../assets/imgs/menu/menu-item2.jpg'
import img3 from '../../assets/imgs/menu/menu-item3.jpg'
import Line from '../Line/Line';
const Highlights = (props) => {
    const items = [
        {
            title: 'Seared Salmon Fillet',
            desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
            imgUrl: img1
        },
        {
            title: 'Rosemary Filet Mignon',
            desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
            imgUrl: img2
        },
        {
            title: 'Summer Fruit Chocolate Mousse',
            desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
            imgUrl: img3
        }

    ]
    return (
        <section className="highlights">
            <div className="main-line container">

                <Line></Line>
            </div>
            <div className="highlights-container container flex space-between">

                <div className="highlights-content flex column">

                    <h2 className="highlights-title">A few highlights from our menu</h2>
                    <p className="highlights-p">
                        We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.
        </p>
                </div>
                <div className="highlights-lists">
                    <BookList books={items} />
                </div>
            </div>
        </section>
    )


}

export default Highlights
