
import React from 'react'


const Ul = (props) => {

    return (
        <ul className={`clean-list ${props.classNames ? props.classNames : ''}`}>
            {props.children}
        </ul>
    )


}

export default Ul
