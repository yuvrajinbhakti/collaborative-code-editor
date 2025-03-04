import React, { useState } from "react";
import { Client } from "../components/Client";
import Editor from "../components/Editor";

export const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: 1, userName: "user1" },
    { socketId: 2, userName: "user2" },
    { socketId: 3, userName: "user3" },
    { socketId: 4, userName: "user4" },
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img src="/image.png" alt="code-buddy" className="logoImage" />
          </div>
          <h3> Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client userName={client.userName} key={client.socketId} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};
