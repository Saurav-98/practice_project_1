import React, { useState } from "react";
import "./UserForm.css";
import Card from "./Card";
import ErrorModal from "./ErrorModal";

const UserForm = ({ onUserSubmit }) => {
  const [user, setUser] = useState({ userName: "", age: "" });

  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formInputHandler = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!user.userName.length || !user.age) {
      setShowModal(true);
      setErrorMessage("Please Enter UserName and Age Before Submitting!");
    } else if (user.age < 1) {
      setShowModal(true);
      setErrorMessage("Entered Age Should be greater than 0");
    } else {
      onUserSubmit(user);
      setUser({ userName: "", age: "" });
    }
  };
  const resetModal = () => {
    setShowModal(false);
    setErrorMessage("");
  };

  document.querySelector("body").addEventListener("click", resetModal);

  return (
    <>
      <Card>
        <form className="user-form" onSubmit={formSubmitHandler}>
          <label htmlFor="user_name">Username</label>
          <input
            name={"userName"}
            onChange={formInputHandler}
            type="text"
            id="user_name"
            value={user.userName}
          />
          <label htmlFor="user_age">Age (Years)</label>
          <input
            name="age"
            onChange={formInputHandler}
            type="number"
            id="user_age"
            value={user.age}
          />
          <button className="btn">Add User</button>
        </form>
      </Card>

      {showModal && <ErrorModal errorMessage={errorMessage} />}
    </>
  );
};

export default UserForm;
