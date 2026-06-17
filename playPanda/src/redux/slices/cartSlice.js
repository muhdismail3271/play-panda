import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state , action) => {
            const quantity = action.payload.quantity || 1;
            const existingItems = state.cartItems.find(
                (item) => item.id === action.payload.id
            );

            existingItems ? existingItems.quantity += quantity : state.cartItems.push({
                ...action.payload,
                quantity
            });
        },
        removeFromCart: (state , action) => {
            state.cartItems = state.cartItems.filter(item => 
                item.id !== action.payload
            )
        },
        increaseQty: (state, action) => {
            const item = state.cartItems.find(
                item => item.id === action.payload
            );
            if(item) item.quantity +=1
        },
        decreaseQty: (state, action) => {
            const item = state.cartItems.find(
                item => item.id === action.payload
            );
            if(item && item.quantity > 1) item.quantity -= 1;
        },
        clearCart: state => state.cartItems = []
    }
});

export const { addToCart , removeFromCart , increaseQty , decreaseQty , clearCart } = cartSlice.actions

export default cartSlice.reducer
