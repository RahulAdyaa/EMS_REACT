import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='flex overflow-x-auto items-center justify-start flex-nowrap gap-5 h-[55%] w-full py-5 mt-10' >
        <div className="flex-shrink-0 h-full p-5 w-[300px] bg-emerald-400 rounded-xl ">
            <div className='flex justify-between items-center  '>
                <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sed. Modi rerum et ex est.</p>
        </div>
        <div className="flex-shrink-0 h-full p-5 w-[300px] bg-cyan-600 rounded-xl ">
            <div className='flex justify-between items-center  '>
                <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sed. Modi rerum et ex est.</p>
        </div>
        <div className="flex-shrink-0 h-full p-5 w-[300px] bg-purple-700 rounded-xl ">
            <div className='flex justify-between items-center  '>
                <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sed. Modi rerum et ex est.</p>
        </div>
        <div className="flex-shrink-0 h-full p-5 w-[300px] bg-rose-400 rounded-xl ">
            <div className='flex justify-between items-center  '>
                <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sed. Modi rerum et ex est.</p>
        </div>
        <div className="flex-shrink-0 h-full p-5 w-[300px] bg-pink-900 rounded-xl ">
            <div className='flex justify-between items-center  '>
                <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sed. Modi rerum et ex est.</p>
        </div>
       
    </div>
  )
}

export default TaskList