import React, { useState } from 'react'

const Five = () => {
    const [isToggle, setIsToggle]= useState(false)

    const handleToggle = ()=>{
        setIsToggle(!isToggle)
    }
  return (
   <>
    <label>
        <input type="checkbox" placeholder='toggle' onChange={handleToggle} />
    </label>
    <p> {isToggle ? "on" : "off"}</p>
   </>
  )
}

export default Five