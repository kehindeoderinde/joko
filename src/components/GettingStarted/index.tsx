import Button from "components/Button";
import React from "react";
import './GettingStarted.scss';

const GettingStarted : React.FC = ()=> {
    return (
        <div className="getting-started">
            <p className="getting-started_text">
                <span className="getting-started_text--title">hear the stories behind</span>
                <span className="getting-started_text--subtitle">the music</span>
            </p>
            <Button placeholder="get started"/>
        </div>
    )
}

export default GettingStarted;