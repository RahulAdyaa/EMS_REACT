import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-cyan-600 rounded-xl ">
            <div className='flex justify-between items-center  '>
                <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.descriptions}</p>
            <div className="mt-4">
                <button>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask