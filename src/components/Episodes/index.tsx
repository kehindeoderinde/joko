import React from "react"
import Ammarae from 'assets/images/Ammarae.png';
import PrettyBoyDo from 'assets/images/PrettyBoyDo.png';
import BigWiz from 'assets/images/BigWiz.png';
import Rema from 'assets/images/Rema.png';
import Buju from 'assets/images/Buju.png';
import BurnaBoy from 'assets/images/BurnaBoy.png';
import Tems from 'assets/images/Tems.png';
import JoeBoy from 'assets/images/JoeBoy.png';
import TiwaSavage from 'assets/images/TiwaSavage.png';
import './Episodes.scss';

const Episodes: React.FC = ()=> (
    <div className="episodes">
        <div className="episodes_header">
            <p className="episodes_title">
                <span className="episodes_title">episodes</span>
                <span className="episodes_title--alt">episodes</span>
                <span className="episodes_title--alt">episodes</span>
                <span className="episodes_title--alt">episodes</span>
                <span className="episodes_title--alt">episodes</span>
                <span className="episodes_title--alt">episodes</span>
            </p>
        </div>
        <div className="episodes_content">
            <div className="episodes_content--box">    
                <img src={Ammarae} alt="" className="episodes_content--img" />
                <p className="episodes_content--text">Episode 1- Ammarea</p>
            </div>
            <div className="episodes_content--box">    
                <img src={PrettyBoyDo} alt="Prettyboy Do" className="episodes_content--img" />
                <p className="episodes_content--text">Episode 2- Prettyboy D-o</p>
            </div>
            <div className="episodes_content--box">    
                <img src={BigWiz} alt="Big Wiz" className="episodes_content--img" />
                <p className="episodes_content--text">Episode 3- Big Wiz</p>
            </div>
            <div className="episodes_content--box">    
                <img src={Rema} alt="" className="episodes_content--img" />
                <p className="episodes_content--text">Episode 4- Rema</p>
            </div>
            <div className="episodes_content--box">    
                <img src={Buju} alt="" className="episodes_content--img" />
                <p className="episodes_content--text">Episode 5- Buju</p>
            </div>
            <div className="episodes_content--box">    
                <img src={BurnaBoy} alt="" className="episodes_content--img" />
                <p className="episodes_content--text">Episode 6- Burna Boy</p>
            </div>
            <div className="episodes_content--box">    
                <img src={Tems} alt="" className="episodes_content--img" />
                <p className="episodes_content--text">Episode 7- Tems</p>
            </div>
            <div className="episodes_content--box">    
                <img src={JoeBoy} alt="" className="episodes_content--img" />
                <p className="episodes_content--text">Episode 8- JoeBoy</p>
            </div>
            <div className="episodes_content--box">    
                <img src={TiwaSavage} alt="" className="episodes_content--img" />
                <p className="episodes_content--text">Episode 9- Tiwa Savage</p>
            </div>
        </div>
        <a href="" className="episodes_btn">view more</a>
        {/* <Tiwa style={{width: 430}}/> */}
    </div>
)

export default Episodes;