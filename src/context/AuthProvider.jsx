import React, { createContext } from 'react'
import { getLocalStorage,setLocalStorage } from '../utils/localStorage'
import { useState,useEffect } from 'react'

export const AuthContext=createContext()

const AuthProvider = ({children }) => {
    const [userData, setUserData] = useState(null)


    useEffect(() => {
      setLocalStorage();
      const {employees}=getLocalStorage()
      setUserData(employees)      
    }, [])

    if (!userData) return null  // Prevent rendering children until userData is set
    
  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider