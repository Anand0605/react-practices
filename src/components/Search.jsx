import React, { useState } from 'react'

const Search = ({items}) => {
const [searchTerm, setSearchTerm] = useState('')

const filterdItems = items.filter((item)=>item.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
        <input type="text" placeholder='search....' onChange={(e)=>setSearchTerm(e.target.value)} />
        <ul>
            {
                filterdItems.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Search