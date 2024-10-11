import React from "react";

import Addinput from "../components/Addinput";
import ListItem from "../components/Listitem";

const All = (props) => {
  const { handleAddTask, toggleCompleted, tasks } = props;

  return (
    <div>
      <Addinput handleAddTask={handleAddTask} />
      {tasks.map((task) => (
        <ListItem key={task.id} toggleCompleted={toggleCompleted} task={task} />
      ))}
    </div>
  );
};

export default All;
