import React from "react";
import "../App.css";
export const Home = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img height="40px" src="/image.png" alt="code-buddy" />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ROOM ID" />
          <input type="text" className="inputBox" placeholder="USERNAME" />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a href="/editor/12321" className="createNewBtn">
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
