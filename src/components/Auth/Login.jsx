import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [password, setPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const submitHandler =(e) => {
        e.preventDefault();
        handleLogin(userEmail, password);
        setUserEmail("");
        setPassword("");
    }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={(e) => {
                submitHandler(e)

            }}
            className='flex flex-col items-center justify-center gap-4'>
                <input 
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 rounded-full py-4 px-4 text-xl placeholder:text-gray-400' 
                type="email" 
                placeholder='Enter your email'
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                />
                <input 
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 rounded-full py-4 px-4 text-xl placeholder:text-gray-400'
                 type="password" 
                 placeholder='Enter your password'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 />
                <button 
                type='submit'
                className='text-white outline-none border-none bg-emerald-600 rounded-full py-4 px-4 text-xl w-full'>
                    Log in
                </button>
            </form>

        </div>

    </div>
  )
}

export default Login