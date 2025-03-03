import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
export const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          height="40px"
          className="homePageLogo"
          src="/image.png"
          alt="code-buddy"
        />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="inputBox"
            placeholder="ROOM ID"
          />
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="inputBox"
            placeholder="USERNAME"
          />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a
              onClick={createNewRoom}
              href="/editor/12321"
              className="createNewBtn"
            >
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Build with 🧠 by &nbsp;
          <a href="https://github.com/yuvrajinbhakti">Yuvraj Singh Nain</a>
        </h4>
      </footer>
    </div>
  );
};
