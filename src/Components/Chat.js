import React, { useContext } from "react";
import Cam from "../Images/cam.png";
import Add from "../Images/add.png";
import More from "../Images/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = ({ id }) => {
  const { currentUser, data } = useContext(ChatContext);

  if (!data.chatId) {
    return <div>Please select a chat to start messaging</div>;
  }

  console.log("Chat component mounted");

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input recaiver={id}/>
    </div>
  );
};

export default Chat;