import { dummyChats } from "../../lib/dummyChats";
import { useState } from "react";
import "./chat.scss";

function Chat() {

  const [chat, setChat] = useState(true);
  const [chatUser, setChatUser] = useState(dummyChats[0]);

  const displayChat = (user) => {
    if (chatUser.name === user.name) {
      setChat(!chat);
      return;
    }
    setChatUser(user);
    setChat(true);
  }

  // console.log(chat, chatUser.messages);

  return (
    <div className="chat">
      <div className="messages">

        <h1>Messages</h1>

        {dummyChats.map((user, index) => {
          return (
            <div className="message" key={index} onClick={()=>displayChat(user)}>
              <img
                src={user.profileImg}
                alt=""
              />
              <span>{user.name}</span>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          );
        })}

      </div>

      {chat && (
        <div className="chatBox">

          <div className="top">
            <div className="user">
              <img
                src={chatUser.profileImg}
                alt=""
              />
              <span>{chatUser.name}</span>
            </div>
            <span className="close" onClick={()=>setChat(false)}>X</span>
          </div>

          <div className="center">
            {chatUser.messages.map((message, index) => {
              return (
                <div className={`chatMessage ${message.own ? "own" : ""}`} key={index}>
                  <p>{message.message}</p>
                  <span>{message.date}</span>
                </div>
              );
            })}
          </div>

          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
