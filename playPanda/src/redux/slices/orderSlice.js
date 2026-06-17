import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOrders } from "../../services/orderService";

const fetchOrders = createAsyncThunk("orders/fetchOrders", async() => {return await getOrders();})

const initialState = {
    orders: [],
    loading: false,
    error: null
}

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers:{
        addOrder: (state,action) => state.orders.push(action.payload)
    },
    extraReducers: builder => {
        builder
            .addCase(fetchOrders.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOrdered.fulfilled, (state , action) => {
                 
            })
    }
})

export const {setOrders , addOrder} = orderSlice.actions;
export default orderSlice.reducer