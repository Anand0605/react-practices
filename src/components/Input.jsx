import React, { useState } from 'react'

const Input = () => {
    const [input, setInput]= useState("")


  return (
    <>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
    <p>Input: {input}</p>
    </>
  )
}

export default Input