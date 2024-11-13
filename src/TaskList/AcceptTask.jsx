import React from 'react'


const AcceptTask = ({data}) => {
  
  return (
<div className="flex-shrink-0 h-full p-5 w-[300px] bg-emerald-400 rounded-xl ">
            <div className='flex justify-between items-center  '>
                <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.dates}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className="flex justify-between mt-4">
                <button className=' bg-green-600 rounded-3xl py-1 px-2 text-sm'>Mark as Completed</button>
                <button className=' bg-red-500 rounded-3xl py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask