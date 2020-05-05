import React, { useState } from "react";
import Button from "./Button";

export default function Form({ formFunction, name }) {
  const [title, setTitle] = useState("");
  const data = title;
  function submit(e) {
    e.preventDefault();
    formFunction(data);
  }
  function changeTitle(e) {
    setTitle(e.target.value);
  }
  return (
    <form onSubmit={submit}>
      <label>
        Title
        <input onChange={changeTitle} type="text" />
      </label>
      <Button name="Add" />
      <button className={name}>Click Me</button>
    </form>
  );
}
