import React from "react";
import chevronRight from "../../assets/chevron.svg";
import cross from "../../assets/x.svg";
import line1 from "../../assets/Line 1.svg";
import logo from "../../assets/icon.png";
import "./style.css";
import "./styleguide.css";
import chatBubble from "../../assets/chat-bubble.svg";
import ask from "./gpt.js"

export function AssistantHelper() {
    const [isOpen, setIsOpen] = React.useState(false);

    function toggleAssistant() {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <>
            <div className="chatbot-button" onClick={toggleAssistant}>
                <img className="chat-bubble" alt="Chat bubble" src={chatBubble}/>

                <div className="text-wrapper-5">AI Assistant</div>
            </div>
            {isOpen && <AiAssistant/>}
        </>
    );


}

export const AiAssistant = () => {
    return (
        <div className="AI-assistant">
            <div className="div">
                <div className="overlap">

                    <div className="search">
                        <textarea
                            id="aiInput"
                            className="value"
                            placeholder="Type your message here"
                            name="input"
                        />
                        <button onClick={async() => {
                            await ask(document.getElementById("aiInput").value)}}>
                            <img
                            className="chevron-right"
                            src={chevronRight}
                            alt="Submit"
                            />
                        </button>
                    </div>
                </div>

                <div className="overlap-group">
                    <div className="text-wrapper">AI Assistant</div>

                    <div className="x">
                        <img className="icon" alt="Icon" src={cross} />
                    </div>
                </div>

                <img className="line" alt="Line" src={line1} />

                <img className="logo" alt="Logo" src={logo} />

                <div className="overlap-2">
                    <div className="text-bubble" />

                    <p className="p">Hi, how can I help you today?</p>
                </div>

                <div className="div-wrapper">
                    <div className="text-wrapper-2">?</div>
                </div>
            </div>
        </div>
    );
};
