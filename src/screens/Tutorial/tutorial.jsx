import React from "react";
import screenshot202503041749302 from "../../assets/screenshot-2025-03-04-174930-1.png";
import "./style.css";
import "./styleguide.css"

export const TutorialPage = () => {
    return (
        <div className="tutorial-page">
            <div className="div">
                <img
                    className="screenshot"
                    alt="Screenshot"
                    src={screenshot202503041749302}
                />

                <div className="rectangle" />

                <div className="text-wrapper">TUTORIALS</div>

                <div className="menu">
                    <div className="menu-list">
                        <div className="menu-list-item">
                            <div className="state-layer">
                                <div className="leading-element" />

                                <div className="content">
                                    <div className="label-text">Photo Editor</div>
                                </div>
                            </div>
                        </div>

                        <div className="menu-list-item">
                            <div className="state-layer">
                                <div className="leading-element-2" />

                                <div className="content">
                                    <div className="label-text">AI Image Generator</div>
                                </div>
                            </div>
                        </div>

                        <div className="menu-list-item">
                            <div className="state-layer">
                                <div className="leading-element-3" />

                                <div className="content">
                                    <div className="label-text">Other</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
