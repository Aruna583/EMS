import React from 'react';

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5'>
        <div className='flex justify-between items-center p-1'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>
            {data?.category}
            </h3>
            <h4 className='text-sm'>
            {data?.taskDate}
            </h4>
            </div>
            <h2 className='mt-5 text-xl  font-semibold'>{data?.taskTitle}</h2>
            <p className='text-sm mt-2'>{data?.taskDescription}</p>
            <div className='mt-6'>
                <button className='w-full bg-green-600 rounded font-medium py-1 px-2 text-xs'>Complete</button>
            </div>
        </div>
  )
}

export default CompleteTask