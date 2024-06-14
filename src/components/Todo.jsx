import React, { useState } from 'react'

const Todo = () => {
    const [input, setInput] = useState("")
    const [todo, setTodo] = useState([])
    // console.log(input)

    // const addItem = () => {
    //     const newItem = {
    //         id: "123",
    //         input: input,

    //     }
    //     setTodo([newItem, ...todo])
    //     setInput("")

    // }
    // console.log(todo)

    const addItem = ()=>{
        if(input.trim()!== ""){
            setTodo([...todo, input])
            setInput('')
        }
    }

const remove =(index)=>{
   const updateTodo =  todo.filter((_, i)=> i!== index)
    setTodo(updateTodo)
}
    return (
        <>
            <div>

                <input
                    type="text"
                    placeholder='input todo...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addItem}>+</button>
            </div>
            <div>
               <ul>
               {
                    todo.map((item, index)=>
                         (
                            <li key={index}>{item}
                            <button onClick={()=>remove(index)}>-</button>
                            </li>
                         )
                    )
                }
               </ul>
            </div>
        </>
    )
}

export default Todo