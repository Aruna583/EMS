import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [category, setCategory] = useState('');

    const [newTask, setNewTask] = useState({})


    const onSubmitCreateTask  = (e) => {
        e.preventDefault();
        setNewTask({taskTitle, taskDate, taskDescription, category, active:false, newTask: true, failed:false, completed:false } )

    
        const localStorageData = userData

        localStorageData.forEach(function(elem){
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask +1 
            }
        })

        setUserData(localStorageData)

        setTaskDate('');
        setCategory('');
        setTaskDescription('');
        setTaskTitle('');
        setAssignTo('');
    }

  return (
    <div className='p-5 bg-[#1c1c1c] rounded mt-7'>
            <form onSubmit={(e)=> {onSubmitCreateTask(e)}} className='flex flex-wrap items-start justify-between w-full'>
                <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input 
                    value={taskTitle}
                    onChange={(e) => {setTaskTitle(e.target.value)}}
                    type="text"
                    placeholder='Make Ui design'
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
                    />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input type='date'
                    value={taskDate}
                    onChange={(e) => {setTaskDate(e.target.value)}}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'/>
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                    <input 
                    value={assignTo}
                    onChange={(e) => {setAssignTo(e.target.value)}}
                    type="text"
                     placeholder='Employee name'
                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'/>
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input 
                    value={category}
                    onChange={(e) => {setCategory(e.target.value)}}
                    type="text"
                    placeholder='design, dev, etc'
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
                    />
                </div>
                </div>
                <div className='w-2/5'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea 
                    value={taskDescription}
                    onChange={(e) => {setTaskDescription(e.target.value)}}
                    name="" 
                    cols="30" 
                    rows="10" 
                    className='w-full text-sm h-44 py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'/>
                </div>
                
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default CreateTask