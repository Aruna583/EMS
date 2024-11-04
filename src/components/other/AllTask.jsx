import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext)
  return (
    <div id="AllTask" className='bg-[#1c1c1c] p-5 rounded mt-5'>
        <div  className='bg-red-400 mb-2 py-2 px-4 flex justify-between'>
                <h2 className='w-1/5 font-medium text-lg'>Employee Name</h2>
                <h3 className='w-1/5 font-medium text-lg'>New Task</h3>
                <h5 className='w-1/5 font-medium text-lg'>Active Task</h5>
                <h5 className='w-1/5 font-medium text-lg'>Completed</h5>
                <h5 className='w-1/5 font-medium text-lg'>Failed</h5>
            </div>
        <div className='h-[80%] overflow-auto'>
        {userData.map((ele, idx) => {
            return (
            <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='font-medium text-lg w-1/5'>{ele?.firstName}</h2>
                <h3 className='font-medium text-lg w-1/5 text-blue-400'>{ele?.taskCounts?.newTask}</h3>
                <h5 className='font-medium text-lg w-1/5 text-yellow-400'>{ele?.taskCounts?.active}</h5>
                <h5 className='font-medium text-lg w-1/5 text-white'>{ele?.taskCounts?.completed}</h5>
                <h5 className='font-medium text-lg w-1/5 text-red-600'>{ele?.taskCounts?.failed}</h5>
            </div>
        )
        })}
        </div>
    </div>
  )
}

export default AllTask