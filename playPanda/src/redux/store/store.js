import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice.js"
import cartReducer from "../slices/cartSlice.js"
import authReducer from "../slices/authSlice.js"
import orderReducer from "../slices/orderSlice.js"

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        auth: authReducer,
        orders: orderReducer,
    }
})

export default store