import React, { useState } from "react";
import UserForm from "./components/UserForm";
import Card from "./components/Card";
import OutputUsers from "./components/OutputUsers";

const App = () => {
  const [users, setUsers] = useState([]);
  const usersArray = [
    {
      userName: "Saurav Verma",
      age: 24,
      id: "s24",
    },
    {
      userName: "Tushar Gautam",
      age: 26,
      id: "t26",
    },
    {
      userName: "Shubham Gautam",
      age: 25,
      id: "524",
    },
  ];

  const submitUsetHandler = (user) => {
    const newUser = {
      ...user,
      id: Math.random(),
    };
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <>
      <UserForm onUserSubmit={submitUsetHandler} />

      <OutputUsers users={users} />
    </>
  );
};

export default App;
