import React, { useRef, useImperativeHandle } from "react";
import Input from "./Input";

export const userData = {
  name: "hi",
  email: "",
};

export default function Form() {
  const userName = useRef();
  const userEmail = useRef();
  const dialog = useRef();

  function handleSaveData() {
    userData.name = userName.current.value;
    console.log(userData.name);
    dialog.current.showModal();
  }
  return (
    <div>
      <div id="app">
        <Input ref={userName} type="text" label="Your Name" />
        <Input ref={userEmail} type="email" label="Your E-Mail" />
        <p id="actions">
          <button onClick={handleSaveData}>Save Data</button>
        </p>
        <dialog ref={dialog}>Are you sure ?</dialog>
      </div>
    </div>
  );
}
