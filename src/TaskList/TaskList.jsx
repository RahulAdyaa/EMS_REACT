import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  if (!data || !data.tasks) {
    return <div>Loading...</div>;
  }
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto items-center justify-start flex-nowrap gap-5 h-[55%] w-full py-5 mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.NewTask) {
          return <NewTask key={idx} data={elem} />;
        }

        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
