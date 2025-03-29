import React from "react";
import logo from "../../assets/logo.png";
import rectangle34 from "../../assets/Rectangle 34.png";
import rectangle35 from "../../assets/Rectangle 35.png";
import rectangle36 from "../../assets/Rectangle 36.png";
import rectangle37 from "../../assets/Rectangle 37.png";
import rectangle38 from "../../assets/Rectangle 38.png";
import rectangle39 from "../../assets/Rectangle 39.png";
import rectangle40 from "../../assets/Rectangle 40.png";
import screenshot202503041749302 from "../../assets/screenshot-2025-03-04-174930-1.png";
import "./style.css";
import "./styleguide.css"

export const EditorIntro = () => {
    return (
        <div className="editor-page">
            <div className="div">
                <img
                    className="screenshot"
                    alt="Screenshot"
                    src={screenshot202503041749302}
                />

                <div className="rectangle"/>

                <div className="overlap">
                    <div className="signup-upload-empty">
                        <div className="overlap-group">
                            <div className="overlap-2">
                                <div className="rectangle-2"/>

                                <div className="rectangle-3"/>

                                <div className="text-wrapper">TEMPORARY PROJECTS</div>

                                <div className="rectangle-4"/>

                                <div className="rectangle-5"/>

                                <div className="text-wrapper-2">Generate image</div>

                                <div className="text-wrapper-3">Open image</div>

                                <img className="logo" alt="Logo" src={logo}/>

                                <p className="SIGN-UP-LOG-IN">
                  <span className="span">
                    <br/>
                  </span>

                                    <span className="text-wrapper-4">SIGN UP/LOG IN</span>
                                </p>

                                <div className="text-wrapper-5">Welcome to PIXLR</div>

                                <div className="text-wrapper-6">AI powered Photo Editor</div>
                            </div>

                            <img className="img" alt="Rectangle" src={rectangle39}/>

                            <img className="rectangle-6" alt="Rectangle" src={rectangle40}/>
                        </div>
                    </div>

                    <div className="rectangle-7"/>

                    <div className="rectangle-8"/>

                    <div className="text-wrapper-7">Face swap</div>

                    <div className="text-wrapper-8">Photo Collage</div>

                    <div className="rectangle-9"/>

                    <div className="text-wrapper-9">Premium Edit</div>

                    <div className="rectangle-10"/>

                    <div className="text-wrapper-10">AI templates</div>

                    <div className="rectangle-11"/>

                    <div className="text-wrapper-11">Tool tutorials</div>

                    <img className="rectangle-12" alt="Rectangle" src={rectangle34}/>

                    <img className="rectangle-13" alt="Rectangle" src={rectangle38}/>

                    <img className="rectangle-14" alt="Rectangle" src={rectangle37}/>

                    <img className="rectangle-15" alt="Rectangle" src={rectangle36}/>

                    <img className="rectangle-16" alt="Rectangle" src={rectangle35}/>
                </div>
            </div>
        </div>
    );
};
