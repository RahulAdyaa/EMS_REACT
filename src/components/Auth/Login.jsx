import React, { useState } from 'react'
import { pass } from 'three/webgpu'

const Login = ({handleLogin}) => {

 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler=(e)=>{
      console.log("email,password",email,password)
      handleLogin(email,password)
      setEmail("")
      setPassword("")
    }
  return (

    
    <div className='flex h-screen w-screen items-center justify-center '>
        
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form 
        onSubmit={submitHandler}className='flex flex-col items-center justify-center'>
            <input required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className=' outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full px-5 py-3 placeholder:text-gray-400' type="email" placeholder='Enter your Email'  />
            <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }
            }
            req="true" className='outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full px-5 py-3 mt-3 placeholder:text-gray-400'type="password" placeholder='Enter your Password'  />
            <button className='mt-7 px-28 py-2 text-white outline-none  border-none bg-emerald-600 text-xl rounded-full  placeholder:text-white'>Log In</button>

        </form>
      </div>
    </div>
  )
}

export default Login