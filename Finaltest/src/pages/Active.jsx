import React from "react";

import Addinput from "../components/Addinput";
import Listitem from "../components/Listitem";

const Active = (props) => {
  const { handleAddTask, toggleCompleted, tasks } = props;

  return (
    <div>
      <Addinput handleAddTask={handleAddTask} />
      {tasks
        .filter((task) => task.completed == false)
        .map((task) => (
          <Listitem
            key={task.id}
            toggleCompleted={toggleCompleted}
            task={task}
          />
        ))}
    </div>
  );
};

export default Active;
