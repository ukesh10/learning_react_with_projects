import React, { useState } from 'react'
import { NavLink as Link } from 'react-router-dom';
import { CgShoppingCart } from "react-icons/cg";
import '../Assets/css/Header.css'
import logo from "../Assets/img/logo.png"
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const [activeItem, setActiveItem] = useState('home');

    const handleNavItemClick = (navItem) => {
        setActiveItem(navItem);
    };

    return (
        <nav>
            <div className='logo'>
                <img src={logo} alt="logo"></img>
            </div>
            <div className='nav-item'>
                <ul>
                    <li>
                        <Link exact to='/' className={activeItem === 'home' ? 'nav-item-active' : ''}
                            onClick={() => handleNavItemClick('home')}>Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className={activeItem === 'about' ? 'nav-item-active' : ''}
                            onClick={() => handleNavItemClick('about')}>About</Link>
                    </li>
                    <li>
                        <Link to='/products' className={activeItem === 'products' ? 'nav-item-active' : ''}
                            onClick={() => handleNavItemClick('products')}>Products</Link>
                    </li>
                    <li>
                        <Link to='/contact' className={activeItem === 'contact' ? 'nav-item-active' : ''}
                            onClick={() => handleNavItemClick('contact')}>Contact</Link>
                    </li>
                    <li>
                        {isAuthenticated && <p className='welcome'>Welcome, {user.name}</p>}
                    </li>
                    {isAuthenticated ? (<>
                        <li className='button'>
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </button>
                    </li>
                    <li>
                    <Link to='/cart' className={activeItem === 'cart' ? 'nav-item-active' : ''}
                        onClick={() => handleNavItemClick('cart')}><CgShoppingCart size={25} /><div className='number'>{10}</div></Link>
                </li></>
                    ) : (
                        <li className='button'>
                            <button onClick={() => loginWithRedirect()}>Log In</button>
                        </li>
                    )
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Header
