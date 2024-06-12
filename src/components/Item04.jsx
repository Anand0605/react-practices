import React from 'react'

const Item04 = () => {
const list = ["task1", 'task2', 'task3',  'task4', 'task5']

  return (
    <ul>
        {
            list.map((item, index)=>{
                return <li key={index}>{item}</li>
            })
        }
    </ul>
  )
}

export default Item04