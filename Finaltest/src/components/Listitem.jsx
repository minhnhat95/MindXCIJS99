import React from "react";

const Listitem = (props) => {
  const { task, toggleCompleted, children } = props;
  const handleOnChange = () => {
    toggleCompleted(task.id);
  };

  return (
    <div key={task.id} className="d-flex gap-1 m-2 justify-content-between">
      <div className="d-flex gap-1 m-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleOnChange}
        />
        <h6
          className="m-0"
          style={task.completed ? { textDecoration: "line-through" } : {}}
        >
          {task.text}
        </h6>
      </div>
      {children}
    </div>
  );
};

export default Listitem;
