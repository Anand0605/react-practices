import React, { useState } from 'react'

const ColoPicker = () => {
const [selectColor, setSelectColor] = useState('#000000')

const hadleChange = (e)=>{
setSelectColor(e.target.value);
}


  return (
    <div>
        <input type="color" onChange={hadleChange} />
        <div style={{width:'20rem', height: "20rem", backgroundColor: setSelectColor}}></div>
    </div>
  )
}

export default ColoPicker