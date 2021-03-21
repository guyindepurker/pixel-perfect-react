
import React from 'react'
import {NavLink} from 'react-router-dom'

import './Menu.scss'

const Menu = (props) => {
const menuLinks = [{txt:'Home',src:'/'},{txt:'about',src:'/about'}]
    return (
        <nav className="menu">
        <ul className="clean-list menu-links flex flex-gap">
        {menuLinks.map((link,idx)=><li key={idx} className="nav-link"><NavLink exact to={link.src}>{link.txt}</NavLink></li>)}
        </ul>
        </nav>
    )

   
}

export default Menu
