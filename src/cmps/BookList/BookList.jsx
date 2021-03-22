
import React from 'react'

import './BookList.scss'
import Ul from '../Ul/Ul';
import BookPreview from '../BookPreview/BookPreview';

const BookList = ({books}) => {

    return (
        <Ul className="book-list">
            {books.map((book,idx)=><BookPreview key={idx} book={book} />)}
        </Ul>
    )

   
}

export default BookList
