import React from 'react';

const Header = (props) => {
  const {data, changeUser} = props
 

    const logOut = () =>{
        localStorage.setItem('loggedInUser', '');
        changeUser();
    }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{data?.firstName ? data?.firstName : "Admin"}</span></h1>
        <button onClick={logOut} className='bg-red-500 py-2 px-5 font-medium text-white rounded-sm'> Log Out</button>
    </div>
  )
}

export default Header