import React, { useEffect, useRef, useState } from "react";
import { Client } from "../components/Client";
import Editor from "../components/Editor";
import { initSocket } from "../socket";
import ACTIONS from "../Actions";
import {
  useLocation,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";
import toast from "react-hot-toast";
export const EditorPage = () => {
  const reactNavigator = useNavigate();
  const { roomId } = useParams();
  const socketRef = useRef();
  const location = useLocation();
  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));
      function handleErrors(e) {
        console.log("socket error", e);
        toast.error("Socket connection failed, try again later.");
        reactNavigator("/");
      }
      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        userName: location.state?.userName,
      });
    };
    init();
  }, []);
  const [clients, setClients] = useState([
    { socketId: 1, userName: "user1" },
    { socketId: 2, userName: "user2" },
    { socketId: 3, userName: "user3" },
    { socketId: 4, userName: "user4" },
  ]);

  if (!location.state) {
    return <Navigate to="/" />;
  }

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
