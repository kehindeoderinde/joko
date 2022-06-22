import React from "react";
import { ReactComponent as Twitter} from 'assets/images/Twitter.svg';
import { ReactComponent as Facebook} from 'assets/images/Facebook.svg';
import { ReactComponent as Instagram} from 'assets/images/Instagram.svg';
import './Footer.scss';

const Footer : React.FC = ()=> (
    <footer className="footer">
        <ul className="footer_menu">
            <li className="footer_menu--items">
                <a href="">about</a>
            </li>
            <li className="footer_menu--items">
                <a href="">contact</a>
            </li>
            <li className="footer_menu--items">
                <a href="">privacy policy</a>
            </li>
            <li className="footer_menu--items">
                <a href="">terms and conditions</a>
            </li>
        </ul>
        <div className="footer_icons">
            <div className="footer_icon">
                <Twitter/>
            </div>
            <div className="footer_icon">
                <Facebook/>
            </div>
            <div className="footer_icon">
                <Instagram/>
            </div>
        </div>
    </footer>
)

export default Footer;