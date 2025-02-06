import React from "react";
import BarNav from '../navbar/Navbar';
import './chatbot.css'

const ChatBot= () => {
  return (
  <div>
    {/* <BarNav/> */}
    <div className="ai-container">
        
      <h1>AI Assistant</h1>
      <div className="iframe-container">
        <iframe
          src="https://copilotstudio.microsoft.com/environments/Default-88227c99-d157-4dbe-8e33-d8b3fcc29577/bots/cr69f_agent1GaMdB2/webchat?__version__=2"
          frameBorder="0"
          title="AI Chat"
          allow="microphone; camera"
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default ChatBot;
