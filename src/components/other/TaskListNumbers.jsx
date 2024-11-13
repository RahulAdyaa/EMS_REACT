import React from 'react';

const TaskListNumbers = ({ data }) => {
  console.log(data);

  if (!data || !data.taskCounts) {
    return <div>Loading...</div>; // Handle loading state
  } 

  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className="rounded-xl w-[30%] py-5 px-6 bg-red-400">
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2> {/* Display newTask count */}
        <h2 className='text-xl font-medium'>New Task</h2>
      </div>
      <div className="rounded-xl w-[30%] py-5 px-6 bg-blue-400">
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2> {/* Display completed count */}
        <h2 className='text-xl font-medium'>Completed Task</h2>
      </div>
      <div className="rounded-xl w-[30%] py-5 px-6 bg-green-400">
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2> {/* Display active count */}
        <h2 className='text-xl font-medium'>Active Task</h2>
      </div>
      <div className="rounded-xl w-[30%] py-5 px-6 bg-yellow-400">
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2> {/* Display failed count */}
        <h2 className='text-xl font-medium'>Failed Task</h2>
      </div>
    </div>
  );
};

export default TaskListNumbers;
