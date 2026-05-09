import { useDispatch } from "react-redux"
import "../styles/ProductCard.css"
import { addToCart } from "../redux/slices/cartSlice";

export default function ProductCard({ product }) {


    const dispatch = useDispatch();

    return (
        <div className="product-card">
            <div className="product-image-box">
                
                <img src={product.image} alt={product.name} />

            </div>

            <div className="product-details">
                <p className="product-brand">Play Panda</p>
                <h3>{product.name}</h3>
                <p className="product-price">Rs. {product.price}</p>
            </div>

            <button className="buy-button" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
    )
}
