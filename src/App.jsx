import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { setLocalStorage, getLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUser] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  
  useEffect(() =>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role);
      setLoggedInUser(userData.role);
    }
    
  }, [])


  const handleLogin = (email, password) =>{
    if(email == 'admin@example.com' && password == '123'){
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'admin'}))
    } else if (userData){
      const employee = userData.find((e) =>e.email == email && e.password == password)
      if( employee){
      setUser('employee')
      setLoggedInUser(employee)
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'employee', data:employee}))
    }}
    else{
      alert('invalid credentials')
    }
  }
  

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user =='admin' ? 
      (<AdminDashboard changeUser={setUser}/>) : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser}/> : null)}
    </>
  )
}

export default App