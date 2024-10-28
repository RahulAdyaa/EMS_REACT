import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className=" rounded-xl w-[30%] py-5 px-6 bg-red-400">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        <div className=" rounded-xl w-[30%] py-5 px-6 bg-blue-400">
            <h2 className='text-3xl font-semibold'>3</h2>
            <h2 className='text-xl font-medium'>Completed Task</h2>
        </div>
        <div className=" rounded-xl w-[30%] py-5 px-6 bg-green-400">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-medium'>Accepted Task</h2>
        </div>
        <div className=" rounded-xl w-[30%] py-5 px-6 bg-yellow-400">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-medium'>Failed Task</h2>
        </div>
    </div>
  )
}

export default TaskListNumbers