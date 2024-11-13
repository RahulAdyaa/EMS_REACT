import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-rose-400 rounded-xl ">
            <div className='flex justify-between items-center  '>
                <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}    </h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className="mt-2">
        <button className=" flex justify-center ml-8 w-3/4 rounded-3xl bg-red-700 ">Failed</button>
      </div>
        </div>
  )
}

export default FailedTask