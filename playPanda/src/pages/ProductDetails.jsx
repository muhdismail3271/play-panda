import { useParams } from "react-router-dom"
import { getSingleProduct } from "../services/productService"
import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/slices/cartSlice"
import "../styles/ProductDetails.css"

export default function ProductDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getSingleProduct(id)
                setProduct(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct()
    }, [id])

    if (!product) {
        return (
            <>
                <NavBar />
                <h1 className="py-20 text-center text-2xl font-semibold">Loading....</h1>
            </>
        )
    }

    return (
        <>
            <NavBar />

            <div className="page-container product-details-container">
                <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">

                    <div className="product-image-wrapper">
                        <img src={product.image} alt={product.name} className="product-main-image md:h-[460px]"/>
                    </div>

                    <div>
                        <h1 className="product-info-title md:text-[38px]">{product.name}</h1>
                        <p className="product-info-price md:text-[30px]">Rs. {product.price}</p>
                        <p className="product-info-description">{product.description}</p>
                        <div className="quantity-selector">
                            <button className="btn-qty" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                                −
                            </button>
                            <span className="qty-value">{quantity}</span>
                            <button className="btn-qty" onClick={() => setQuantity(quantity + 1)}>
                                +
                            </button>
                        </div>
                        <p className="stock-info">In Stock: {product.stock}</p>
                        <button className="btn-add-to-cart" onClick={() => dispatch(addToCart({ ...product, quantity }))}>
                            ADD TO CART
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}
