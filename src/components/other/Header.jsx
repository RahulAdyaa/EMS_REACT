import React from 'react';

const Header = (props) => {
  // Check if data (employee details) is available
  if (!props) {
    return <div>Loading...</div>; // Display a fallback message if data is not available
  }
const logOutUser = ()=>{
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
}


  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{props.firstName} 👋</span>
      </h1>
      <button 
      onClick={logOutUser}
        className='bg-red-600 text-lg font-medium text-white px-3 py-2 rounded-sm'
         // Call the logout function on button click
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
