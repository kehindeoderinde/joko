import React from "react";
import { Link } from "react-router-dom";

import Wizkid from 'assets/images/Wizkid.png';
import './ButtonBar.scss';

const ButtonBar: React.FC = ()=> {
    return (
        <div className="buttonbar">
            <Link to="/instant-access" className="buttonbar_btn">Instant acccess</Link>
            <div className="buttonbar_profile">
                <Link to="/profile" className="buttonbar_profile--link">Profile</Link>
                <img src={Wizkid} alt="img" className="buttonbar_profile--img"/>
            </div>
        </div>
    )
}

export default ButtonBar;