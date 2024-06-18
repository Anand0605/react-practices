import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const initialState = {
        cartItems: []
    };

    function cartReducer(state, action) {
        switch (action.type) {
            // Define cases for different actions here
            default:
                return state;
        }
    }

    const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
