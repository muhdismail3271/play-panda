import api from "./api.js"

export default async function getProducts() {
    const res = await api.get("/products");
    return res.data;
}

export async function getSingleProduct (id) {
    const res = await api.get(`/products/${id}`);
    return res.data;
}
