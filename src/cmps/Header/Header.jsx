
import React from 'react'
import logo from '../../assets/imgs/logo.svg'
import './Header.scss'

const Header = (props) => {

    return (
        <header className="header">
            <div className="main-header container flex space-between">
                <Logo />
            </div>
        </header>
    )


}

export default Header
const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} className="logo-img" alt="logo" />
        </div>
    )
}