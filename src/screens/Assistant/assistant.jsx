import React, {useEffect} from "react";
import chevronRight from "../../assets/chevron.svg";
import cross from "../../assets/x.svg";
import line1 from "../../assets/Line 1.svg";
import logo from "../../assets/icon.png";
import user from "../../assets/user.svg";
import "./style.css";
import "./styleguide.css";
import chatBubble from "../../assets/chat-bubble.svg";
import ask from "./gpt.jsx"
import {initMessage} from "./gpt.jsx";

export function AssistantHelper() {
    const [isOpen, setIsOpen] = React.useState(false);

    function toggleAssistant() {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <>
            {isOpen && <AiAssistant/>}
            <div className="chatbot-button" onClick={toggleAssistant}>
                <div className="text-wrapper-3">AI Assistant</div>
                <img className="chat-bubble" alt="Chat bubble" src={chatBubble}/>
            </div>
        </>
    );
}

const AiAssistant = () => {
    useEffect(() => {
        initMessage()
    })

    return (
        <div id="chat-root" className="AI-assistant">
            <div className="box">
                <div className="header">
                    <img className="x" alt="exit" src={cross}/>
                    <div className="chat-title">AI Assistant</div>
                    <div className="help">?</div>
                </div>

                <img className="line" alt="Line" src={line1}/>

                <div id="message-box">

                    <div><AiMessage message="Hi, how can I help you today?" /></div>
                </div>

                <div className="text-field">
                    <div className="search">
                        <input
                            id="aiInput"
                            className="value"
                            placeholder="Type your message here"
                            name="input"
                            type="text"
                            autoComplete="off"
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

export function AiMessage(props) {
    return (
        <div className="ai-message">
            <img className="pfp" alt="Logo" src={logo}/>
            <div className="ai-text-bubble">
                <span className="content">{props.message}</span>
            </div>
        </div>
    )
}

export function UserMessage(props) {
    return (
        <div className="user-message">
            <div className="user-text-bubble">
                <span className="content">{props.message}</span>
            </div>
            <img className="pfp" alt="User" src={user}/>
        </div>
    )
}