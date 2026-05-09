import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import { fetchProducts } from "../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FeaturedProducts() {

    const [waiting, setWaiting] = useState(true);

    const dispatch = useDispatch();

    const { loading , products , error } = useSelector(state => state.products);

    const wait = (ms) => new Promise((res) => setTimeout(res, ms));

    useEffect(() => {
        const loadProducts = async () => {
            dispatch(fetchProducts());
            await wait(1000);
            setWaiting(false);
        };

        loadProducts();
    }, [dispatch]);


    if(loading || waiting) {
        return <h2 className="justify-self-center-safe">Loading....</h2>
    }

    if(error) {
        return <h2>{error}</h2>
    }

    return (
        <section className="products-section">
            <div className="products-heading">
                <p>Featured collection</p>
                <h2>Trending Products</h2>
            </div>

            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}
