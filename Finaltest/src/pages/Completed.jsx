import React from "react";
import Listitem from "../components/Listitem";

const Completed = (props) => {
  const { deleteTask, deleteAll, toggleCompleted, tasks } = props;
  return (
    <div>
      {tasks
        .filter((task) => task.completed == true)
        .map((task) => (
          <Listitem key={task.id} toggleCompleted={toggleCompleted} task={task}>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => deleteTask(task.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </Listitem>
        ))}
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-danger" onClick={deleteAll}>
          <i className="fa-solid fa-trash"></i> Delete All
        </button>
      </div>
    </div>
  );
};

export default Completed;
