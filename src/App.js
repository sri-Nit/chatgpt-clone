import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
    }
  };
  const handleClearChat = () => {
    setMessages([]);
  };
  const handleNewChat = () => {
    setMessages([]);
  };
  return (
    <div className="App">
      <aside className="sidebar">
        <button className="sidebar-button" onClick={handleNewChat}>
          + New Chat
        </button>
        <button className="sidebar-button" onClick={handleClearChat}>
          Clear Chat
        </button>
      </aside>
      <main className="chat-area">
        {messages.length === 0 ? (
          <div className="empty-chat-message">
            <h1>ChatGPT</h1>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`chat-bubble ${msg.sender}`}>
              <p>{msg.text}</p>
            </div>
          ))
        )}

        <div className="input-wrapper">
          <form className="input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="chat-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything..."
            />
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
