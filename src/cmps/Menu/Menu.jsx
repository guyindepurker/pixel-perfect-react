
import React from 'react'
import { NavLink } from 'react-router-dom'

import './Menu.scss'
import Ul from '../Ul/Ul';

const Menu = (props) => {
    const menuLinks = [{ txt: 'Home', src: '/' }, { txt: 'about', src: '/about' }]
    return (
        <NavMenu>
                {menuLinks.map(({ txt, src }, idx) => <LiLink key={idx} src={src} txt={txt} />)}
        </NavMenu>
    )


}

export default Menu

const NavMenu = (props) => {
   return( <nav className="menu">
       <Ul classNames="menu-links flex flex-gap">
            {props.children}
        </Ul>
    </nav>)
}
const LiLink = ({ src, txt }) => {
    return <li className="menu-link"><NavLink exact to={src}>{txt}</NavLink></li>
}