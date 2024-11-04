import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 text-black rounded-xl p-5'>
        <div className='flex justify-between items-center p-1'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>
                {data?.category}
            </h3>
            <h4 className='text-sm text-black '>
                {data?.taskDate}
            </h4>
        </div>
        <h2 className='text-black mt-5 text-xl  font-semibold'>{data?.taskTitle}</h2>
        <p className='text-black text-sm mt-2'>{data?.taskDescription}</p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm rounded font-medium'>Mark as Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm rounded font-medium'>Mark as Failed</button>
        </div>
    </div>
  )
}

export default AcceptTask