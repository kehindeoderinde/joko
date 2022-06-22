import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Navbar from "components/Navbar"
import Home from "pages/Home";

import './Page.scss'



const Episodes: React.FC = ()=> <p>Episodes</p>

const Page : React.FC = ()=> {
    return (
        <main className="page">
            <Router>
                <Navbar/>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route exact key="/home" path="/home" component={Home} />
                    <Route key="/episodes" path="/episodes" component={Episodes}/>
                </Switch>
            </Router>
        </main>
    )
}

export default Page;