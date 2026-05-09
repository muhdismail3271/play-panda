import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getProducts from "../../services/productService.js";


export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        return await getProducts();
    }
);

const initialState = {
    loading: false,
    products: [],
    error: null
};

const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;
