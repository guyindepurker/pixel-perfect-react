
import React from 'react'

import './Header.scss'
import Menu from '../Menu/Menu';

const Header = (props) => {

    return (
        <header className="header">
            <div className="main-header container flex space-between">
                <Logo />
                <Menu />
            </div>
        </header>
    )


}

export default Header
const Logo = () => {
    return (
        <div className="logo">
            Logo
        </div>
    )
}