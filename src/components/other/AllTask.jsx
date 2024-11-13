import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { log } from "three/webgpu";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);
  // console.log(Authdata.employees);

  return (
    <div className="bg-[#1c1c1c] rounded-xl p-5   mt-5">
      <div className="bg-yellow-800 mb-2 py-2 px-4 flex justify-between rounded-xl ">
        <h2 className="w-1/5 font-medium text-lg">Employee Name</h2>
        <h3 className="w-1/5 font-medium text-lg">New Task</h3>
        <h5 className="w-1/5 font-medium text-lg">Active Task</h5>
        <h5 className="w-1/5 font-medium text-lg ">Completed</h5>
        <h5 className="w-1/5 font-medium text-lg">Failed</h5>
      </div>
      <div className="h-[80%] ">
      {userData.map((elem,idx) => {
        return (
          <div key={idx} className=" border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded-lg ">
            <h2 className="w-1/5  font-medium text-lg">{elem.firstName}</h2>
            <h3 className="w-1/5 font-medium text-lg text-blue-400">{elem.taskCounts.newTask}</h3>
            <h5 className="w-1/5 font-medium text-lg text-yellow-500">{elem.taskCounts.active}</h5>
            <h5 className="w-1/5 font-medium text-lg text-gray-300">{elem.taskCounts.completed}</h5>
            <h5 className="w-1/5 font-medium text-lg text-red-600">{elem.taskCounts.failed}</h5>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default AllTask;
