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

const AiAssistant = () => {
    return (
        <div className="AI-assistant">
            <div className="box">
                <div className="header">
                    <img className="x" alt="exit" src={cross}/>
                    <div className="chat-title">AI Assistant</div>
                    <div className="help">?</div>
                </div>

                <img className="line" alt="Line" src={line1}/>

                <div className="messages">
                    <div className="message">
                        <img className="logo" alt="Logo" src={logo}/>
                        <div className="text-bubble">
                            <span className="content">Hi, how can I help you today?</span>
                        </div>
                    </div>
                </div>

                <div className="text-field">
                    <div className="search">
                        <textarea
                            id="aiInput"
                            className="value"
                            placeholder="Type your message here"
                            name="input"
                        />
                        <button className="submit" onClick={async () => {
                            await ask(document.getElementById("aiInput").value)
                        }}>
                            <img
                                className="chevron-right"
                                src={chevronRight}
                                alt="Submit"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
