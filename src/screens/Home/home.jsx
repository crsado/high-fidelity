import React from "react";
import screenshot202503041749301 from "../../assets/screenshot-2025-03-04-174930-1.png";
import "./style.css";
import {Link} from "react-router-dom";
import {AssistantHelper} from "../Assistant/assistant.jsx";

export const Homepage = () => {
    return (
        <div className="homepage">
            <div className="div">
                <div className="topbar">
                    <img
                        className="screenshot"
                        alt="Screenshot"
                        src={screenshot202503041749301}
                    />
                </div>

                <div className="row-1">
                    <Link to="/editor">
                        <div className="rectangle">
                            <div style={{color: '#8b38d7'}} className="text-wrapper">AI Photo Editor</div>
                        </div>
                    </Link>
                    <div className="rectangle">
                        <div style={{color: '#2da0da'}} className="text-wrapper">AI Image Generator</div>
                    </div>
                </div>


                <div className="row-1">
                    <div className="rectangle-2">
                        <div className="text-wrapper-2">Download</div>
                    </div>
                    <Link to="/tutorials">
                        <div className="rectangle-2">
                            <div className="text-wrapper-2">Tutorials</div>
                        </div>
                    </Link>
                </div>


                <AssistantHelper/>
            </div>
        </div>
    );
};
