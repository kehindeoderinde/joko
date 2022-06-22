import React from "react"
import Playlist1 from 'assets/images/Playlist1.png'
import Playlist2 from 'assets/images/Playlist2.png'
import Playlist3 from 'assets/images/Playlist3.png'
import Playlist4 from 'assets/images/Playlist4.png'
import './Playlists.scss';

const Playlists: React.FC = ()=> {
    return (
        <div className="playlists">
            <div className="playlists_header">
                <p className="playlists_title">
                    <span className="playlists_title">playlists</span>
                    <span className="playlists_title--alt">playlists</span>
                    <span className="playlists_title--alt">playlists</span>
                    <span className="playlists_title--alt">playlists</span>
                    <span className="playlists_title--alt">playlists</span>
                    <span className="playlists_title--alt">playlists</span>
                </p>
            </div>
            <div className="playlists_content">
                <div className="playlists_content--items">
                    <img src={Playlist1} className="playlists_content--img"/>
                    <div className="playlists_content--title">fire skies</div>
                    <div className="playlists_content--subtitle">by fajimi</div>
                </div>
                <div className="playlists_content--items">
                    <img src={Playlist2} className="playlists_content--img"/>
                    <div className="playlists_content--title">fire skies</div>
                    <div className="playlists_content--subtitle">by fajimi</div>
                </div>
                <div className="playlists_content--items">
                    <img src={Playlist3} className="playlists_content--img"/>
                    <div className="playlists_content--title">fire skies</div>
                    <div className="playlists_content--subtitle">by fajimi</div>
                </div>
                <div className="playlists_content--items">
                    <img src={Playlist4} className="playlists_content--img"/>
                    <div className="playlists_content--title">fire skies</div>
                    <div className="playlists_content--subtitle">by fajimi</div>
                </div>
            </div>
        </div>
    )
}

export default Playlists;
