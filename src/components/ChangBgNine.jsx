import React, { useState } from 'react'

const ChangBgNine = () => {

    const [bgcolor, setBgColor]= useState("cyan")

    const updateColor = ()=>{
        const newColor =  bgcolor === "red" ? "blue" : "red";
        setBgColor(newColor)
    }
  return (
    
        <div onClick={updateColor} style={{ backgroundColor: bgcolor,
            height:"200px",
            width:"200px"
        }}>Anand</div>
    
  )
}

export default ChangBgNine