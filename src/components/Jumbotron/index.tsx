import React from "react"
import Rec from 'assets/images/Rec.svg'
import Battery from 'assets/images/Battery.svg'
import {ReactComponent as Play} from 'assets/images/Play.svg'
import './Jumbotron.scss';

const Jumbotron: React.FC = ()=> (
    <div className="jumbotron">
        <div className="jumbotron_textart">
            <img src={Rec} alt="Rec" className="jumbotron_textart--art"/>
            <p className="jumbotron_textart--text">
                <span className="jumbotron_textart--text--alt">SKDFBLSDFNSK</span>
                <span className="jumbotron_textart--text--main">STORIES</span>
                <span className="jumbotron_textart--text--alt">SDLJSNDFJSKLZFNL</span>
            </p>
        </div>
        <div className="jumbotron_textart">
            <p className="jumbotron_textart--text">
                <span className="jumbotron_textart--text--alt">SSKDFBLSDFNSKSDLJSNDFDFK</span>
                <span className="jumbotron_textart--text--main">BEHIND</span>
                <span className="jumbotron_textart--text--alt">DJKDFKDD</span>
            </p>
        </div>
        <div className="jumbotron_textart">
            <p className="jumbotron_textart--text">
                <span className="jumbotron_textart--text--alt">DDDSAS</span>
                <span className="jumbotron_textart--text--main">THE</span>
                <span className="jumbotron_textart--text--alt">FLBSDF</span>
                <span className="jumbotron_textart--text--main">MUSIC</span>
                <span className="jumbotron_textart--text--alt">NSKSDLDFKDJKDFK</span>
            </p>
            <img src={Battery} alt="Battery" className="jumbotron_textart--art"/>
        </div>
        <p className="jumbotron_text">
            <span className="jumbotron_text--title">Behind every good song, there is a unique, bold, passionate artist with an important story to tell.</span>
            <span className="jumbotron_text--subtitle">Buy a pass to watch your favourite artist.</span>
        </p>
        <div className="jumbotron_action">
            <p className="jumbotron_action--text">Press play to get started</p>
            <a href="" className="jumbotron_action--btn">
                <Play/>
            </a>
        </div>
    </div>
)

export default Jumbotron;