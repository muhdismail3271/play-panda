import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    loading: false,
    error: null
}

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers:{
        setOrders: (state, action) => state.orders = action.payload,
        addOrders: (state,action) => state.orders.push(action.payload)
    }
})

export const {setOrders , addOrders} = orderSlice.actions;
export default orderSlice.reducer