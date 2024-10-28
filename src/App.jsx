import React, { useContext, useEffect,useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'



const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData=useContext(AuthContext)
  console.log("authData",authData)
  
  console.log("authData ", authData)
  useEffect(() => {
    if(authData){
      const loggedInUser=localStorage.getItem("loggedInUser")

      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  }, [authData])
  // localStorage.clear()
  const handleLogin=(email,password)=>{
    console.log("INSIDE HANDLE LOGIN")
    console.log("email,password",email,password)  
    if(email=='admin@gmail.com' && password=='123'){
      // console.log('this is admin')
      setUser({role:'admin'})
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(authData ){
      console.log("authData", authData)
      const employee = authData.employees.find((e) => email == e.email && password == e.password); 
      if (employee) {
        
        setUser({role:'employee'})
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      // console.log('this is user')
      }
    }
    else{
      console.log('this is user is invalid')
      alert("Invalid credentials")
    }
  }

  console.log("User====", user)
  return (

    <>
    {/* if user is empty */}
    {!user ? <Login handleLogin={handleLogin}/>:''}
    {user && user.role=='admin' ? <AdminDashboard/> : <EmployeeDashboard data={loggedInUserData}/>}
    {/* <EmployeeDashboard/> */}
    </>
  )
}

export default App