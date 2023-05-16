import React from "react";
import Card from "./Card";
import "./OutputUser.css";

const OutputUsers = ({ users }) => {
  return (
    <Card>
      {users.map((user) => (
        <div className="user" key={user.id}>
          {user.userName} ({user.age} Years old)
        </div>
      ))}
    </Card>
  );
};

export default OutputUsers;
