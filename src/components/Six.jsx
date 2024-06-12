import React, { useEffect, useState } from 'react'

const Six = () => {
    const [data, setData] = useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response)=> response.json())
        .then((json)=> setData(json))
    })
  return (
    <>
    {
        data ? (
            <>
            <div>title: {data.title}</div>
            {/* <div>body: {data.body}</div> */}
            </>
        ):(
            <p>Loading.....</p>
        )
    }
    </>
  )
}

export default Six