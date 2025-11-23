import React from 'react'
import './App.css'
import Sidebar from './Sidebar'
const App = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-2 flex justify-center items-center">
        <Sidebar></Sidebar>
      </div>
    </div>
  )
}

export default App