import React, { useState } from "react";
import {
    BrowserRouter as Router,
    NavLink as Link
} from 'react-router-dom'
import ButtonBar from "components/ButtonBar";
import SearchBar from "components/SearchBar";

import Logo from 'assets/images/Logo.svg';
import './Navbar.scss';

const Navbar : React.FC = ()=> {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    return (
        <nav className={`navbar ${isUserAuthenticated ? 'navbar--centered' : ''}`}>
            {
                isUserAuthenticated ? (
                    <div className="navbar_logo">
                        <img src={Logo} alt="JOKO" className="navbar_logo--img"/>
                    </div>
                ): (
                    <div className="navbar_section">
                        <div className="navbar_logo">
                            <img src={Logo} alt="JOKO" className="navbar_logo--img"/>
                        </div>
                        <ul className="navbar_menu">
                            <li className="navbar_menu--items"><Link activeClassName="active" to="/home">Home</Link></li>
                            <li className="navbar_menu--items"><Link activeClassName="active" to="/episodes">Episodes</Link></li>
                            <li className="navbar_menu--items"><Link activeClassName="active" to="/nft-collectibles">Nft Collectibles</Link></li>
                        </ul>
                        <SearchBar/>
                        <ButtonBar/>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar;