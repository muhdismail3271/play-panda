import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import { fetchProducts } from "../redux/slices/productSlice"
import { useDispatch, useSelector } from "react-redux"

export default function FeaturedProducts() {
    const [waiting, setWaiting] = useState(true)
    const dispatch = useDispatch()
    const { loading, products, error } = useSelector(state => state.products)

    const wait = (ms) => new Promise((res) => setTimeout(res, ms))

    useEffect(() => {
        const loadProducts = async () => {
            dispatch(fetchProducts())
            await wait(1000)
            setWaiting(false)
        }
        loadProducts()
    }, [dispatch])

    if (loading || waiting) {
        return <h2 className="py-20 text-center text-2xl font-semibold">Loading....</h2>
    }

    if (error) {
        return <h2 className="py-20 text-center text-2xl font-semibold text-red-700">{error}</h2>
    }

    return (
        <section className="page-container section-padding">
            <div className="mb-10">
                <p className="mb-2 text-[15px] font-semibold uppercase tracking-[0.5px] text-[#16815d]">Featured collection</p>
                <h2 className="text-[40px] font-bold tracking-[-0.5px]">Trending Products</h2>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}
