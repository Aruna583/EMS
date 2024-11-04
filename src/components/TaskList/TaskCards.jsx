import React from 'react'

const TaskCards = ({data}) => {
    const {taskCounts} = data
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='bg-blue-400 w-[45%] px-9 py-6 rounded-xl'>
            <h2 className='text-2xl font-semibold'>{taskCounts?.newTask}</h2>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        <div className='bg-green-400 w-[45%] px-9 py-6 rounded-xl'>
            <h2 className='text-2xl font-semibold'>{taskCounts?.completed}</h2>
            <h2 className='text-xl font-medium'>Completed Task</h2>
        </div>
        <div className=' bg-yellow-400 w-[45%] px-9 py-6 rounded-xl'>
            <h2 className='text-2xl font-semibold text-black'>{taskCounts?.active}</h2>
            <h2 className='text-xl font-medium text-black'>Accepted Task</h2>
        </div>
        <div className='bg-red-400 w-[45%] px-9 py-6 rounded-xl'>
            <h2 className='text-2xl font-semibold'>{taskCounts?.failed}</h2>
            <h2 className='text-xl font-medium'>Failed Task</h2>
        </div>
    </div>
  )
}

export default TaskCards