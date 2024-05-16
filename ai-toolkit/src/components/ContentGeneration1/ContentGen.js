import React, { useState, useRef, useEffect } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "./content.css";
import logo from "../ContentGeneration1/logo3.png";
import { useUser } from "../UserContext";
//import Particle from "../Particle";

const API_KEY = process.env.REACT_APP_OPENAI_API;

function ContentGen() {
  const { user } = useUser();
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hey there, I am AI ToolKit. Feel free to chat with me!",
      sender: "AITool",
    },
  ]);

  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setTyping(true);
    await processMessageToChatGpt(newMessages);
    setTyping(false);
    scrollToBottom();
  };

  const processMessageToChatGpt = async (chatMessages) => {
    const apiMessages = chatMessages.map((messageObject) => ({
      role: messageObject.sender === "Con" ? "assistant" : "user",
      content: messageObject.message,
    }));

    const systemMessage = {
      role: "system",
      content: "Explain all concepts like I am 10 years old.",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiRequestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch response from OpenAI API");
      }

      const data = await response.json();
      const responseMessage = data.choices[0].message.content;
      const newMessage = { message: responseMessage, sender: "ChatGPT" };
      const updatedMessages = [...chatMessages, newMessage];
      setMessages(updatedMessages);
      scrollToBottom();
    } catch (error) {
      console.error("Error processing message:", error);
      setTyping(false);
    }
  };

  const openAdvancedGC = () => {
    window.open("http://localhost:8000/", "_self"); // opens in the same tab
  };

  return (
    <div className="content-container">
      <div className="sidebar">
        <img src={logo} alt="Chat Logo" className="logo" />
        <button className="sidebar-btn" onClick={() => setMessages([])}>
          New Chat
        </button>
        <button
          className="sidebar-btn advanced-gc-btn"
          onClick={openAdvancedGC}
        >
          Advance GC
        </button>
      </div>
      <div className="chat-container">
        <h1 className="chat-title">Content Generation</h1>
        {user ? (
          <div className="chat">
            <MainContainer>
              <ChatContainer>
                <MessageList>
                  {messages.map((message, i) => (
                    <div
                      key={i}
                      className={`message-container ${
                        message.sender === "user" ? "user" : "bot"
                      }`}
                    >
                      <Message model={message} />
                    </div>
                  ))}
                  {typing && (
                    <TypingIndicator content="Tookit AI is typing..." />
                  )}
                  <div ref={messageEndRef}></div>
                </MessageList>
              </ChatContainer>
            </MainContainer>
            <div className="input-container">
              <input
                type="text"
                className="input"
                placeholder="Type your message..."
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSend(e.target.value);
                    e.target.value = "";
                  }
                }}
              />
              <button
                className="send-btn"
                onClick={() => {
                  const input = document.querySelector(".input");
                  handleSend(input.value);
                  input.value = "";
                }}
              >
                Send
              </button>
            </div>
          </div>
        ) : (
          <div className="login-message">
            <p>Please sign in to access content generation.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContentGen;
