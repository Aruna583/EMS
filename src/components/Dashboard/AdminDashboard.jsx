import React from 'react';
import Header from '../Header/Header';
import CreateTask from '../CreateTask/CreateTask';
import AllTask from '../other/AllTask';

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
        <Header changeUser={props.changeUser}/>
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard