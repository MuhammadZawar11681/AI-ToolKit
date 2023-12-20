import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import './content.css';
import logo from '../ContentGeneration/logo.png';
import userIcon from '../ContentGeneration/contentgAssets/userIcon.png';
import send from '../ContentGeneration/contentgAssets/send.svg';
import queryImg from '../ContentGeneration/contentgAssets/message.svg'
import { sendMsgToOpenAI } from './openai';

// added for gpt3.5turbo
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react"



function ContentGen() {
  // const msgEnd = useRef(null);
  // const [input, setInput] = useState("");
  // const [messages, setMessages] = useState([
  //   {
  //     text: "Hi there i am content generator from AI ToolKit, Feel free to ask anything.I would be happy to help :)",
  //     isBot: true,
  //   }
  // ])

  // useEffect(() => {
  //   msgEnd.current.scrollIntoView();
  // }, [messages])
  // const handleSend = async (e) => {
  //   const text = input;
  //   setInput('');
  //   setMessages([
  //     ...messages,
  //     { text, isBot: false }
  //   ])
  //   e.preventDefault()
  //   try {
  //     const res = await sendMsgToOpenAI(text);
  //     setMessages([
  //       ...messages,
  //       { text, isBot: false },
  //       { text: res, isBot: true }
  //     ])
  //     console.log('response by opeanAI:', res);
  //   } catch (error) {
  //     console.error('Error sending message to OpenAI:', error);
  //   }
  // }

  // const handleKeyPress = (e) => {

  //   if (e.key === 'Enter' && !e.shiftKey) {
  //     e.preventDefault();
  //     handleSend();
  //   }
  // };


  // functions for gpt 3.5 turbo 
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hey there, i am Content Generator from AI-Tool-Kit.Feel free to ask anything i would be very happy to help :)",
      sender: "ChatGPT"
    }
  ]);

  const handleSend = async (message) => {

    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }
    const newMessages = [...messages, newMessage];  //all the old messages +new messages
    // uodate our message state
    setMessages(newMessages);

    // set typing indicator (chat gpt is tyoing)
    setTyping(true);

    // process message to chatgpt (send it and get back response)
    await processMessageToChatGpt(newMessages);
  }

  async function processMessageToChatGpt(chatMessages) {
    //chatMessages {sender:"user" or "ChatGPT",message:"the message content here "}
    //apiMEssages{role:"user" or "assistant", content: "the message content here"}
    let apiMessages = chatMessages.map((messageOject) => {
      let role = "";
      if (messageOject.sender === "ChatGPT") {
        role = "assistant"
      }
      else {
        role = "user"
      }
      return { role: role, content: messageOject.message }

    });
    // 3 roles: user => message from user, "assistant"=> response from GPT, "system" =>initial message telling gpt how to work 

    const systemMessage = {
      role: "system",
      content: "Explain all concepts like i am 10 years old."

    }
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages //array[messge1,messge2 messge3,messge4]
      ]
    }

    const KEY = process.env.REACT_APP_OPENAI_API;

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      console.log(data.choices[0].message.content);
      setMessages(
        [...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]
      );
      setTyping(false);
    });

  }


  return (




    // content-Gen tut code

    <div className="Main-Parent">
      <div className="sideBar">

        <div className="upperside">

          <div className="uppersideTop">
            <div className="upperSideBarHead">            <img src={logo} alt="" className="cg-logo" />
              <span className="brand">AI Toolkit</span>
            </div>




            <button className="midBtn"><img src="" alt="" className="addBtn" />New Chat</button>


          </div>
          <div className="upperSideBottom">
            <button className="query"><img src={queryImg} alt="" className="queryimg" />What is Programming?</button>
            <button className="query"><img src={queryImg} alt="" className="queryimg" />how to use an Api?</button>
          </div>

        </div>


        <div className="lowerside">
          <div className="listItems"><img src="" alt="" className="listItemsImg" />Home</div>
          <div className="listItems"><img src="" alt="" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src="" alt="" className="listItemsImg" />Upgrade To Pro</div>
        </div>

      </div>
      <div className="main">
        <h1 className='chat-title'>Content Generator:</h1>


        {/* new code from gpt 3.5 tut starts here */}

        <div className='Main'>

          <div className='chat' style={{ position: 'relative', height: '600px', width: '700px' }}>
            <MainContainer className="msg-container" >
              <ChatContainer className="msg-container">
                <MessageList style={{ background: '#03001f' }} className='msg-list'
                  scrollBehavior='smooth'
                  typingIndicator={typing ? <TypingIndicator content="Genrating content for you,Please wait a moment" /> : null}
                >
                  {messages.map((message, i) => {
                    return <Message key={i} model={message} />
                  })}

                </MessageList>
                <MessageInput className='input' placeholder="type message here..." onSend={handleSend} />
              </ChatContainer>
            </MainContainer>


          </div>
        </div >


        {/* new code from gpt 3.5 tut  ends here */}


        {/* old code starts here */}

        {/* <div className="chats">
          { <div className="chat">
            <img className="chatImg" src={userIcon} alt="user Icon" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste beatae temporibus eaque debitis natus unde nobis quod odit quos, minus libero omnis veritatis molestiae corporis, necessitatibus provident! Ut, doloribus. Molestiae quas in a. Mollitia veritatis facilis dolor architecto commodi necessitatibus deleniti delectus laudantium consequuntur debitis, illo blanditiis earum animi in. Ratione illum quia mollitia ut amet veritatis, dolore voluptatibus officiis voluptatem, quasi soluta? Eos voluptates, sed voluptas praesentium odio at possimus accusamus dolores corrupti culpa eaque? Doloremque, perferendis iusto! Facilis explicabo ducimus impedit quia eaque officiis neque hic perspiciatis fuga porro tempora praesentium corrupti, at tenetur necessitatibus ullam possimus animi.</p>
          </div>
          <div className="chat bot">
            <img classNam
            e="chatImg" src={logo} alt="brand Icon" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima recusandae fugit neque quasi voluptates repellat ea tempore, voluptate deleniti, dolorem ut ab. Non odio ipsa similique neque earum veniam praesentium possimus asperiores itaque nulla quaerat saepe suscipit sequi libero, repudiandae numquam eos aspernatur eveniet unde. Molestiae amet nostrum tempore illum eius molestias reprehenderit quod perspiciatis id, obcaecati dolores perferendis magnam ipsum quibusdam nobis dolorum adipisci maxime. Dolorem excepturi quod et necessitatibus ipsa, expedita aperiam quia exercitationem eaque odio illo vitae. Nobis soluta quibusdam non magnam totam cumque ab itaque, aperiam id maiores deserunt distinctio rerum minima praesentium! Ipsam, enim placeat?</p>
          </div> } */}


        {/* {messages.map((message, i) =>
            <div key={i} className={message.isBot ? "chat bot" : "chat"} >
              <img className="chatImg" src={message.isBot ? logo : userIcon} alt="brand Icon" /><p className="txt">{message.text}</p>
            </div>
          )}
          {<div ref={msgEnd} />}

        </div> */}

        {/* <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a Message..." name="" id="" */}

        { /* value={input} onChange={(e) => { setInput(e.target.value) }}  />*/}

        {/* <div className="send-parent">
              <button className="send" onClick={handleSend} onKeyDown={e => e.key === 'Enter' ? handleSend :
                ''} >
                <img src={send} alt="send" />
              </button>
            </div>

          </div>
          <p>The model may produce incorrect result. version 2.O Dcember 7,2023</p>
        </div> */}

        {/* old code ends */}

      </div>
    </div >
  );
}


export default ContentGen;



