import React from 'react'
import { useCart } from './CartContext'

const Shopping = () => {

const {cartState, cartDispatch} = useCart()

    const addToCart = (item)=>{

    }
const product =[
    {id:1, name: "ProductA"},
    {id:2, name: "ProductB"},
    {id:3, name: "ProductC"}
]

  return (
   <>
    <div>Shopping</div>
    <h2>Product List</h2>
    <ul>{
        product.map((product)=>(
            <li key={product.id}>{product.name} <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </li>
        ))
        }</ul>
   </>
  )
}

export default Shopping