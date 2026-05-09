import axios from "axios";
import api from "./api.js"

export default async function getProducts() {
    const res = await api.get("/products");
    return res.data;
}