
import React from 'react'

import './BookPreview.scss'
const BookPreview = ({book}) => {

    return (
        <li className="book-preview ">
            <div className="flex book-container">

        <img src={book.imgUrl} className="book-img" alt="book img"/>
        <span className="book-line"></span>
        <div className="book-content">
            <h3 className="book-title">
                {book.title}
            </h3>
            <p className="book-desc">{book.desc}</p>
        </div>
        </div>

        </li>
    )

   
}

export default BookPreview
