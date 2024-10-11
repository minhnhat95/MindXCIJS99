import React, { useState } from "react";

const Addinput = (props) => {
  const { handleAddTask } = props;

  const [text, setText] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    handleAddTask(newTask);

    setText("");
  };
  return (
    <div>
      <form className="d-flex gap-3" onSubmit={handleSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="add details"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Addinput;
