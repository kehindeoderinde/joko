import React from "react"
import Jumbotron from "components/Jumbotron"
import Featured from "components/Featured"
import Episodes from "components/Episodes"
import NftCollectibles from "components/NftCollectibles"
import Playlists from "components/Playlists"
import GettingStarted from "components/GettingStarted"
import Footer from "components/Footer"

const Home: React.FC = ()=> (
    <div className="home">
        <Jumbotron/>
        <Featured/>
        <Episodes/>
        <NftCollectibles/>
        <Playlists/>
        <GettingStarted/>
        <Footer/>
    </div>
)

export default Home;