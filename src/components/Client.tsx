import React from "react";
import Avatar from "react-avatar";
export const Client = ({ userName }) => {
  return (
    <div className="client">
      <Avatar name={userName} size="50px" round="14px" />
      <span className="userName">{userName}</span>
    </div>
  );
};
