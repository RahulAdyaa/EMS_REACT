import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../../TaskList/TaskList'

const EmployeeDashboard = () => {
  // console.log("Data", data)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <h1></h1>
        <Header />
        <TaskListNumbers />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard