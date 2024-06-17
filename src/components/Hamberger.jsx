import React, { useState } from 'react'
import '../../src/App.css'

const Hamberger = () => {

    const [isOpen, setIsOpen]= useState(false)

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <button className='menu-icon' onClick={toggleMenu}>
           |||
        </button>
        <ul className={`menu ${isOpen ? "open" : " "}`}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>search</li>
            <li>Icon</li>
        </ul>
    </div>
  )
}

export default Hamberger