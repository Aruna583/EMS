import React from 'react';
import Header from '../Header/Header';
import TaskCards from '../TaskList/TaskCards';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  const {data, changeUser} = props
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header data={data} changeUser={changeUser}/>
      <TaskCards data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard