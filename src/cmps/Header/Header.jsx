
import React from 'react'
import logo from '../../assets/imgs/logo.svg'
import './Header.scss'
// import Menu from '../Menu/Menu';

const Header = (props) => {

    return (
        <header className="header">
            <div className="main-header container flex space-between">
                <Logo />
                {/* <Menu /> */}
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