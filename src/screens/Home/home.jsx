import React from "react";
import chatBubble from "../../assets/chat-bubble.svg";
import screenshot202503041749301 from "../../assets/screenshot-2025-03-04-174930-1.png";
import "./style.css";
import {Link} from "react-router-dom";

export const Homepage = () => {
    return (
        <div className="homepage">
            <div className="div">
                <Link to="/editor">
                    <div className="overlap">
                        <div className="rectangle"/>

                        <div className="text-wrapper">AI Photo Editor</div>
                    </div>
                </Link>

                <div className="overlap-group">
                    <div className="rectangle-2"/>

                    <div className="text-wrapper-2">AI Image Generator</div>
                </div>

                <div className="overlap-2">
                    <div className="rectangle-3"/>

                    <div className="text-wrapper-3">Download</div>
                </div>

                <Link to="/tutorials">
                    <div className="overlap-group-2">
                        <div className="rectangle-3"/>

                        <div className="text-wrapper-4">Tutorials</div>
                    </div>
                </Link>

                <img
                    className="screenshot"
                    alt="Screenshot"
                    src={screenshot202503041749301}
                />

                <div className="rectangle-4"/>

                <div className="chatbot-button">
                    <img className="chat-bubble" alt="Chat bubble" src={chatBubble}/>

                    <div className="text-wrapper-5">AI Assistant</div>
                </div>
            </div>
        </div>
    );
};
