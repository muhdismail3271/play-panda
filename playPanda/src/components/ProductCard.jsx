import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart } from "../redux/slices/cartSlice"
import "../styles/ProductCard.css"

export default function ProductCard({ product }) {
    const dispatch = useDispatch()

    return (
        <div className="product-card">

            <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-area">
                    <span className="trending-badge">
                        Trending
                    </span>
                    <img src={product.image} alt={product.name} className="product-image"/>
                </div>

                <div className="product-details">
                    <p className="product-brand">Play Panda</p>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">Rs. {product.price}</p>
                </div>
            </Link>

            <button className="btn-add-cart" onClick={() => dispatch(addToCart(product))}>
                Add to Cart
            </button>
        </div>
    )
}
